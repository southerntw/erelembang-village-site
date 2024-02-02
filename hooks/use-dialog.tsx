import { create } from "zustand";

type DialogStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useDialog = create<DialogStore>((set, _get) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
