import Image from "next/image";

import useItemStore from '@/stores/todoStore';
import Item from "@/components/Item";
import useWindowWidth from "@/hooks/common/useWindowWidth";
import { screen } from "@/constants/screen";

interface ListProps {
    type: "todo" | "done";
}

const List = ({ type }: ListProps) => {
    const { todos } = useItemStore();
    const windowWidth = useWindowWidth();

    // type에 따라 필터링
    const filteredTodos = Array.isArray(todos) ? todos.filter(todo => (type === "todo" ? !todo.isCompleted : todo.isCompleted)) : [];

    return (
        <div className="flex flex-col gap-16pxr">
            <Image
                src={type === "todo" ? "images/todo.svg" : "images/done.svg"}
                alt="icon"
                width={97}
                height={36}
            />
            {filteredTodos.length ?
                <>{filteredTodos.map(todo => (
                    <Item todo={todo} isDetail={false} key={todo.id} />
                ))}</> :
                <div className="flex flex-col items-center">
                    <Image
                        src={type === "todo" ? "images/empty_todo.svg" : "images/empty_done.svg"}
                        alt="empty"
                        width={windowWidth > screen.sm ? 240 : 120}
                        height={windowWidth > screen.sm ? 240 : 120}
                    />
                    <div className="b-16 text-slate-400 text-center mt-24pxr">
                        {type === "todo" ? <>할 일이 없어요.<br />TODO를 새롭게 추가해주세요!</> : <>아직 다 한 일이 없어요.<br />해야 할 일을 체크해보세요!</>}</div>
                </div>}
        </div>
    );
};

export default List;