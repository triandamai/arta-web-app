"use client";

import { useEffect, useState } from "react";
import { gooeyToast } from "@/components/ui/goey-toaster";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Plus, PencilLine, Trash } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { User, CreateUserPayload, UpdateUserPayload } from "@/lib/types";
import { useUsers } from "@/hooks/use-users";

export function UsersCrud() {
  const {
    users,
    loading,
    submitting,
    fetchUsers,
    createUser,
    updateUser,
    deleteUser,
  } = useUsers();

  // Form states
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [formData, setFormData] = useState<
    CreateUserPayload | UpdateUserPayload
  >({
    email: "",
    username: "",
    displayName: "",
    password: "",
  });

  const handleOpenCreate = () => {
    setEditingUser(null);
    setFormData({
      email: "",
      username: "",
      displayName: "",
      password: "",
    });
    setIsSheetOpen(true);
  };

  const handleOpenEdit = (user: User) => {
    setEditingUser(user);
    setFormData({
      id: user.id,
      email: user.email || "",
      username: user.username || "",
      displayName: user.displayName || "",
      password: "",
    });
    setIsSheetOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let success = false;
    if (editingUser) {
      success = await updateUser(formData as UpdateUserPayload);
    } else {
      success = await createUser(formData as CreateUserPayload);
    }

    if (success) {
      setIsSheetOpen(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!id) return;
    if (!confirm("Are you sure you want to delete this user?")) return;

    await deleteUser(id);
  };

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "displayName",
      header: "Display Name",
    },
    {
      accessorKey: "username",
      header: "Username",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      id: "actions",
      header: () => <div className="text-right">Actions</div>,
      cell: ({ row }) => {
        const user = row.original;
        return (
          <div className="flex items-center justify-end gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleOpenEdit(user)}
            >
              <PencilLine className="size-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-destructive hover:text-destructive hover:bg-destructive/10"
              onClick={() => handleDelete(user.id)}
            >
              <Trash className="size-4" />
              <span className="sr-only">Delete</span>
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <Button onClick={handleOpenCreate} className="flex items-center gap-2">
          <Plus className="size-4" />
          Add User
        </Button>
      </div>

      <DataTable columns={columns} data={users} loading={loading} />

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent
          side="right"
          className="sm:max-w-md border-border/40 flex flex-col"
        >
          <SheetHeader>
            <SheetTitle>{editingUser ? "Edit User" : "Create User"}</SheetTitle>
            <SheetDescription>
              {editingUser
                ? "Update the user details below."
                : "Fill in the details to create a new user."}
            </SheetDescription>
          </SheetHeader>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 mt-6 h-full flex-1"
          >
            <div className="space-y-4">
              <div className="space-y-2 flex flex-col">
                <Label htmlFor="displayName">Display Name</Label>
                <Input
                  id="displayName"
                  name="displayName"
                  value={formData.displayName || ""}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2 flex flex-col">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  value={formData.username || ""}
                  onChange={handleChange}
                  required
                  placeholder="johndoe"
                  disabled={!!editingUser}
                />
              </div>

              <div className="space-y-2 flex flex-col">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              {(!editingUser || formData.password !== undefined) && (
                <div className="space-y-2 flex flex-col">
                  <Label htmlFor="password">
                    {editingUser ? "New Password (optional)" : "Password"}
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password || ""}
                    onChange={handleChange}
                    required={!editingUser}
                    placeholder={
                      editingUser ? "Leave blank to keep current" : "••••••••"
                    }
                  />
                </div>
              )}
            </div>

            <SheetFooter className="mt-auto sm:justify-start pb-6">
              <Button type="submit" disabled={submitting}>
                {submitting ? "Saving..." : "Save User"}
              </Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
}
