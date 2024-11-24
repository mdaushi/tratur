import { AccountList } from "@/components/account-list";
import AppHeader from "@/components/layouts/app-header";
import AccountHeader from "@/components/layouts/header/account-header";

export default function Account() {
  const breadcrumb = [
    {
      label: "Accounts",
    },
  ];

  return (
    <main>
      <AppHeader items={breadcrumb} />

      <div className="flex-1 space-y-4 p-8 pt-6">
        <AccountHeader />

        <AccountList />
      </div>
    </main>
  );
}
