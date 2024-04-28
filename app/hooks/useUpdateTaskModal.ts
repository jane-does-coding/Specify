import { create } from "zustand";

interface UpdateTaskModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useUpdateTaskModal = create<UpdateTaskModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default useUpdateTaskModal;
