import { create } from "zustand";

type ModalType = "CREATE" | "EDIT";

interface ModalAccount {
  isOpen: boolean;
  type: ModalType | null;
  onOpen: () => void;
  onClose: () => void;
}

export const useModalAccountStore = create<ModalAccount>((set) => ({
  isOpen: false,
  type: null,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
