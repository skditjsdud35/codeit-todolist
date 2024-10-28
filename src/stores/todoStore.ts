import { GetItem, PostItem } from '@/types';
import { create } from 'zustand';

// item 인터페이스 정의
interface ItemStore {
    todos: GetItem[];
    setTodos: (todos: GetItem[]) => void;
    addTodo: (todo: PostItem) => void;
}

// Item 상태 관리 store
const useItemStore = create<ItemStore>((set) => ({
    todos: [],
    setTodos: (todos) => set({ todos }),
    addTodo: (todo) => set((prev) => ({ todos: [todo, ...prev.todos] })),
}));

export default useItemStore;