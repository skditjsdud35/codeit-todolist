import { addItems } from '@/app/api/itemApi';
import useItemStore from '@/stores/todoStore';
import { GetItem, PostItem } from '@/types';
import { useMutation } from 'react-query';

// Item 추가 커스텀 훅
export const useAddItems = () => {

    const { addTodo } = useItemStore();

    return useMutation({
        mutationFn: (newTodo: PostItem) => addItems(newTodo),
        onSuccess: (data) => {
            const updatedTodo: GetItem = {
                ...data, // 서버에서 반환된 데이터
                isCompleted: false, // 필요에 따라 기본값 설정
            };
            addTodo(updatedTodo);
        },
        onError: (error) => {
            alert(error)
        }
    });
};