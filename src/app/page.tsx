'use client'
import CustomButton from "@/components/Button";
import Input from "./(components)/Input";
import ListContainer from "./(components)/ListContainer";
import { useState } from 'react';
import { PostItem } from '@/types';
import { useAddItems } from '@/hooks/mutation/useAddItems';
import useItemStore from "@/stores/todoStore";
import useWindowWidth from "@/hooks/common/useWindowWidth";
import { screen } from "@/constants/screen";

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const { mutate: addItem } = useAddItems();
  const { todos } = useItemStore();
  const windowWidth = useWindowWidth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!inputValue) return;

    const newTodo: PostItem = { name: inputValue };
    addItem(newTodo);
    setInputValue(''); // 입력값 초기화
  };

  return (
    <div className="px-24pxr">
      <div className="max-w-1200pxr mt-24pxr mx-auto">
        <div className="flex gap-16pxr">
          <Input
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSubmit={handleSubmit}
          />
          <CustomButton
            text={windowWidth > screen.sm ? "추가하기" : ""}
            width={windowWidth > screen.sm ? "w-164pxr" : "w-65pxr"}
            color={todos.length ? 'text-slate-900' : "text-white"}
            bgColor={todos.length ? 'bg-slate-200' : 'bg-violet-600'}
            icon={todos.length ? 'plus_black' : "plus_white"}
            onClick={handleSubmit}
          />
        </div>
        <ListContainer />
      </div>
    </div>
  );
}

export default Home;
