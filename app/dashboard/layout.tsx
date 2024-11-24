import SideBarProvider from "@/components/layouts/sidebar-provider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SideBarProvider>{children}</SideBarProvider>;
}
