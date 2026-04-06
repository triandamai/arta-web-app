import { useState, useEffect, useCallback } from "react";
import { apiClient } from "@/lib/api-client";
import { gooeyToast } from "@/components/ui/goey-toaster";
import {
  User,
  CreateUserPayload,
  UpdateUserPayload,
  PaginatedUsersResponse,
  GetUsersParams,
} from "@/lib/types";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const fetchUsers = useCallback(async (params?: GetUsersParams) => {
    setLoading(true);
    try {
      const query = new URLSearchParams();
      if (params?.lastId) query.append("lastId", params.lastId.toString());
      query.append("size", (params?.size || 50).toString());

      const response = await apiClient.get<User[] | PaginatedUsersResponse>(
        `/admin/user/getUserPagination?${query.toString()}`,
      );

      if (response.data) {
        const data = response.data;
        let items: User[] = [];
        if (Array.isArray(data)) {
          items = data;
        } else if (data.content && Array.isArray(data.content)) {
          items = data.content;
        } else if (data.users && Array.isArray(data.users)) {
          items = data.users;
        } else if (data.data && Array.isArray(data.data)) {
          items = data.data;
        }
        setUsers(items);
      } else {
        gooeyToast.error(response.meta?.message || "Failed to fetch users");
      }
    } catch (err) {
      gooeyToast.error("An error occurred while fetching users");
    } finally {
      setLoading(false);
    }
  }, []);

  const createUser = useCallback(
    async (payload: CreateUserPayload) => {
      setSubmitting(true);
      try {
        const response = await apiClient.post<User>(
          "/admin/user/createUser",
          payload,
        );
        if (response.meta?.code === 200 || response.data) {
          gooeyToast.success("User created successfully");
          fetchUsers();
          return true;
        } else {
          gooeyToast.error(response.meta?.message || "Failed to create user");
          return false;
        }
      } catch (err) {
        gooeyToast.error("An unexpected error occurred");
        return false;
      } finally {
        setSubmitting(false);
      }
    },
    [fetchUsers],
  );

  const updateUser = useCallback(
    async (payload: UpdateUserPayload) => {
      setSubmitting(true);
      try {
        const submitData = payload.password
          ? payload
          : { ...payload, password: undefined };
        const response = await apiClient.put<User>(
          "/admin/user/updateUser",
          submitData,
        );
        if (response.meta?.code === 200 || response.data) {
          gooeyToast.success("User updated successfully");
          fetchUsers();
          return true;
        } else {
          gooeyToast.error(response.meta?.message || "Failed to update user");
          return false;
        }
      } catch (err) {
        gooeyToast.error("An unexpected error occurred");
        return false;
      } finally {
        setSubmitting(false);
      }
    },
    [fetchUsers],
  );

  const deleteUser = useCallback(
    async (id: number) => {
      setSubmitting(true);
      try {
        const response = await apiClient.delete<boolean>(
          `/admin/user/deleteUser?id=${id}`,
        );
        if (
          response.meta?.code === 200 ||
          response.data ||
          !response.meta?.message?.toLowerCase().includes("fail")
        ) {
          gooeyToast.success("User deleted successfully");
          fetchUsers();
          return true;
        } else {
          gooeyToast.error(response.meta?.message || "Failed to delete user");
          return false;
        }
      } catch (err) {
        gooeyToast.error("An unexpected error occurred");
        return false;
      } finally {
        setSubmitting(false);
      }
    },
    [fetchUsers],
  );

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return {
    users,
    loading,
    submitting,
    fetchUsers,
    createUser,
    updateUser,
    deleteUser,
  };
}
