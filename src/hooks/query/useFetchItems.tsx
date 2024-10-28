import { fetchItems } from '@/app/api/itemApi'
import useItemStore from '@/stores/todoStore';
import { useQuery } from 'react-query';

// Items 리스트 조회 커스텀 훅
export const useFetchItems = () => {
  const setTodos = useItemStore((state) => state.setTodos);

  return useQuery({
    queryKey: ['getItems'],
    queryFn: () => fetchItems(),
    onSuccess: (data) => {
      setTodos(data);
    },
    refetchOnWindowFocus: false,
  });
};