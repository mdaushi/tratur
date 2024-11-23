"use client";

import { useModalGroupAccountStore } from "@/stores/use-modal-group-account";

export const useModalGroupAccount = () => {
  const store = useModalGroupAccountStore();

  const onOpenCreate = () => store.onOpen("CREATE");
  const onOpenList = () => store.onOpen("LIST");

  return {
    ...store,
    onOpenCreate,
    onOpenList,
  };
};
