import { patchItems } from '@/app/api/itemApi';
import useItemStore from '@/stores/todoStore';
import { GetItem, PatchItem } from '@/types';
import { useMutation, useQueryClient } from 'react-query';

// Item 수정 커스텀 훅
export const usePatchItems = () => {
    const queryClient = useQueryClient();
    const { todos, setTodos } = useItemStore();

    return useMutation(
        (todoData: { id: number; data: PatchItem }) => patchItems(todoData.id, todoData.data),
        {
            onMutate: async (todoData) => {
                //낙관적 업데이트
                await queryClient.cancelQueries(['getItems']); // 쿼리 취소
                const previousTodos = queryClient.getQueryData<GetItem[]>(['getItems']); // 이전 상태 저장

                const newData = todos.map((todo: GetItem) => {
                    if (todo.id === todoData.id) {
                        return { ...todo, ...todoData.data };
                    }
                    return todo;
                });

                setTodos(newData);

                return { previousTodos }; // 이전 상태를 반환
            },
            onError: (error, todoData, context) => {
                if (context?.previousTodos) {
                    setTodos(context.previousTodos);
                }
            },
            onSettled: () => {
                queryClient.invalidateQueries(['getItems']); // 쿼리 무효화
            }
        }
    );
}