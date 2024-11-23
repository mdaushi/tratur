"use client";
import { Button } from "@/components/ui/button";
import { Head } from "@/components/head";
import { useModalGroupAccount } from "@/hooks/use-group-account";

export default function AccountHeader() {
  const { onOpenList } = useModalGroupAccount();

  return (
    <Head title="Accounts">
      <Button onClick={onOpenList}>Add account</Button>
    </Head>
  );
}
