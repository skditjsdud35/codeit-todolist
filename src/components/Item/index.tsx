'use client'
import Image from "next/image";

import { GetItem } from "@/types";
import Link from "next/link";
import { usePatchItems } from "@/hooks/mutation/usePatchItems";
import { useState } from "react";
import useItemStore from "@/stores/todoStore";

interface ItemProps {
    todo: GetItem; // props에 대한 타입 정의
    isDetail: boolean;
    onTitleChange?: (newTitle: string) => void;
}

const Item = ({ todo, isDetail, onTitleChange }: ItemProps) => {

    const { todos } = useItemStore();
    const { mutate: patchItem } = usePatchItems(); // usePatchItems 훅 호출하여 mutate 함수 가져오기
    const [name, setName] = useState(todo.name); // 이름 상태 관리
    const foundTodo = todos.find((item) => item.id === todo.id);

    const onCheckClick = (event: React.MouseEvent<HTMLImageElement>, todo: GetItem) => {
        event.stopPropagation(); // 클릭 이벤트 전파 방지
        event.preventDefault();

        // 상태 전송
        patchItem({
            id: todo.id,
            data: { isCompleted: !foundTodo?.isCompleted }
        });

    };

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newName = event.target.value;
        setName(newName); // 입력된 값으로 상태 업데이트
        if (onTitleChange) {
            onTitleChange(newName); // 부모 컴포넌트에 변경된 제목 전달
        }
    };

    return (
        <Link
            href={`/items/${todo.id}`}
            className={`flex items-center w-full border-2 border-slate-900 rounded-3xl ${isDetail ? 'h-64pxr justify-center' : ' h-50pxr'} ${foundTodo?.isCompleted ? 'bg-violet-100' : 'bg-white'}`}>
            <Image
                src={foundTodo?.isCompleted ? "/images/icon/checkbox_checked.svg" : "/images/icon/checkbox_default.svg"}
                alt="todo"
                width={32}
                height={32}
                className={isDetail ? '' : "ml-12pxr"}
                onClick={(event) => onCheckClick(event, todo)}
            />
            {isDetail ?
                <div className="ml-16pxr border-b-2 border-slate-900">
                    <input
                        type="text"
                        value={name}
                        onChange={onNameChange}
                        className="text-slate-900 b-20 bg-slate-100 bg-opacity-0 focus:outline-none focus:ring-0"
                    />
                </div> :
                <div className={`ml-16pxr text-slate-800 r-16 ${todo.isCompleted ? 'line-through' : ''}`}>
                    {todo.name}
                </div>
            }
        </Link>
    );
};

export default Item;