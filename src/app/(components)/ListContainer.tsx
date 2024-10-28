'use client'

import List from "./List";
import { useFetchItems } from "@/hooks/query/useFetchItems";

const ListContainer = () => {
    useFetchItems();

    return (
        <div className="w-full mt-40pxr gap-48pxr flex flex-col lg:flex-row lg:gap-24pxr">
            <div className="flex-1">
                <List type="todo" />
            </div>
            <div className="flex-1">
                <List type="done" />
            </div>
        </div>
    );
};

export default ListContainer;