import { Head } from "@/components/head";
import AppHeader from "@/components/layouts/app-header";

export default function Home() {
  const breadcrumb = [
    {
      label: "Dashboard",
    },
  ];
  return (
    <main>
      <AppHeader items={breadcrumb} />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Head title="Dashboard"></Head>
      </div>
    </main>
  );
}
