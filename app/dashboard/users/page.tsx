import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { UsersCrud } from "./users-crud";

export default function UsersPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-lg font-semibold md:text-2xl">
                    Users Management
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Manage system users, update their details, and handle
                    access.
                  </p>
                </div>
              </div>
              <UsersCrud />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
