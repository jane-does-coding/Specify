import { create } from "zustand";

interface TaskModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useTaskModal = create<TaskModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default useTaskModal;
