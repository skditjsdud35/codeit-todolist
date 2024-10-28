import { fetchItemsDetail } from '@/app/api/itemApi'
import { useQuery } from 'react-query';

// Items 상세 조회 커스텀 훅
export const useFetchItemsDetail = (itemId: number) => {

    return useQuery({
        queryKey: ['getItemsDetail', itemId],
        queryFn: () => fetchItemsDetail(itemId),
        enabled: !!itemId,
        refetchOnWindowFocus: false,
    });
};