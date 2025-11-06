import { Header } from "@/components/layout/header";
import { MainSidebar } from "@/components/layout/main-sidebar";
import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
} from "@/components/ui/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar side="left" variant="inset" collapsible="icon">
        <MainSidebar />
      </Sidebar>
      <SidebarInset className="bg-background">
        <Header />
        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
