import { patchItems } from '@/app/api/itemApi';
import { PatchItem } from '@/types';
import { useMutation, useQueryClient } from 'react-query';

// Item 상세 수정 커스텀 훅
export const usePatchItemsDetail = () => {
    const queryClient = useQueryClient();

    return useMutation(
        ({ id, data }: { id: number; data: PatchItem }) => patchItems(id, data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['getItemsDetail']);  // 수정 성공 시 쿼리 무효화
            },
        }
    );
};
