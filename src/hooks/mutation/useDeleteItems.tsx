import { deleteItems } from "@/app/api/itemApi";
import { useMutation, useQueryClient } from "react-query";

// Item 삭제 커스텀 훅
export const useDeleteItems = () => {
    const queryClient = useQueryClient();

    return useMutation(
        (id: number) => deleteItems(id),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['getItems']); // 삭제 성공 시 쿼리 무효화
            },
        }
    );
};