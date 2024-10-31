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
            const { tenantId, ...rest } = data; // id와 tenantId를 분리하고 나머지 속성을 rest에 담음
            console.log(tenantId)
            const updatedTodo: GetItem = {
                ...rest, // id와 tenantId를 제외한 나머지 속성 사용
                isCompleted: false, // 필요에 따라 기본값 설정
            };
            console.log(updatedTodo);
            addTodo(updatedTodo);
        },
        onError: (error) => {
            alert(error)
        }
    });
};