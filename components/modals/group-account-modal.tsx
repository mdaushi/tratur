import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalGroupAccountStore } from "@/stores/use-modal-group-account";
import { useEffect } from "react";
import { GroupAccountList } from "./group-account-list";
import GroupAccountForm from "./group-account-form";

export function GroupAccountModal() {
  const { isOpen, onClose, type } = useModalGroupAccountStore();

  // Tambahkan ke Modal component
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {type === "CREATE" && "Create New Group"}
            {type === "LIST" && "Account Group"}
            {type === "EDIT" && "Edit Group"}
          </DialogTitle>
        </DialogHeader>

        {type === "LIST" && <GroupAccountList />}
        {type === "CREATE" && <GroupAccountForm />}

        {/* {selectedGroup ? (
          <CreateAccountForm
            group={selectedGroup}
            onSubmit={handleCreateAccount}
          />
        ) : (
          <InvestmentList onGroupSelect={handleGroupSelect} />
        )} */}
      </DialogContent>
    </Dialog>
  );
}
