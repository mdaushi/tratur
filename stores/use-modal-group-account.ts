import { create } from "zustand";

type ModalType = "CREATE" | "EDIT" | "LIST";

interface ModalData {
  id?: number;
  title: string;
}

interface ModalGroupAccount {
  isOpen: boolean;
  type: ModalType | null;
  data: ModalData | null;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModalGroupAccountStore = create<ModalGroupAccount>((set) => ({
  isOpen: false,
  type: null,
  data: null,
  onOpen: (type, data) => set({ isOpen: true, type, data }),
  onClose: () => set({ isOpen: false }),
}));
