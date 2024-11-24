import SideBarProvider from "@/components/layouts/sidebar-provider";
import { OnboardingModal } from "@/components/modals/onboarding-modal";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SideBarProvider>{children}</SideBarProvider>;
      <OnboardingModal />
    </>
  );
}
