'use client'

import ImageUploader from "./(components)/ImageUploader";
import Memo from "./(components)/Memo";
import CustomButton from "@/components/Button";
import { useParams } from "next/navigation";
import Item from "@/components/Item";
import useItemStore from "@/stores/todoStore";
import { useFetchItemsDetail } from "@/hooks/query/useFetchItemsDetail";
import { useEffect, useState } from "react";
import { PatchItem } from "@/types";
import { useDeleteItems } from "@/hooks/mutation/useDeleteItems";
import { useRouter } from 'next/navigation'
import { usePatchItemsDetail } from "@/hooks/mutation/usePatchItemsDetail";

const ItemsPage = () => {
    const params = useParams();
    const { todos } = useItemStore();
    const todo = todos.find(item => item.id === Number(params.id));

    const { data, isLoading, error } = useFetchItemsDetail(Number(params.id));

    const patchItemsMutation = usePatchItemsDetail();
    const deleteItemsMutation = useDeleteItems();
    const router = useRouter();

    const [memoText, setMemoText] = useState(""); // 초기값을 빈 문자열로 설정
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [isBtnActive, setIsBtnActive] = useState(false); // 버튼 상태 추가

    useEffect(() => {
        if (data) {
            setMemoText(data.memo || ""); // memo 기본값 설정
            setTitle(data.name || ""); // title 기본값 설정
            setImage(data.imageUrl || ""); // image 기본값 설정
        }
    }, [data]);


    // 메모 변경 핸들러
    const handleMemoChange = (newMemo: string) => {
        setMemoText(newMemo);
        setIsBtnActive(newMemo !== data.memo || title !== data.name || image !== data.imageUrl)
    };

    // 타이틀 변경 핸들러
    const handleTitleChange = (newTitle: string) => {
        setTitle(newTitle);
        setIsBtnActive(memoText !== data.memo || newTitle !== data.name || image !== data.imageUrl)
    };

    // 이미지 변경 핸들러
    const handleImageChange = (newImage: string) => {
        setImage(newImage);
        setIsBtnActive(memoText !== data.memo || title !== data.name || newImage !== data.imageUrl)
    };

    //할 일 수정 핸들러 함수
    const handleUpdateClick = () => {
        if (!todo) return; // todo가 없을 경우 종료

        const { id, ...rest } = todo; // id를 분리하고 나머지 속성을 rest에 담음

        const todoData: PatchItem = {
            ...rest, // id를 제외한 나머지 속성 사용
            memo: memoText,
            name: title,
            imageUrl: image, // 필요하다면 여기에 추가
            isCompleted: todo.isCompleted // isCompleted 값을 명시적으로 설정
        };

        patchItemsMutation.mutate({ id: todo.id, data: todoData }, {
            onSuccess: () => {
                alert("수정 완료!");
                router.push('/')
            },
            onError: (error) => {
                alert("수정에 실패하였습니다. 잠시 후 다시 시도해주세요.");
            }
        });
    };


    //할 일 삭제 핸들러 함수
    const handleDeleteItem = () => {
        if (!todo) return;

        deleteItemsMutation.mutate(todo.id, {
            onSuccess: () => {
                alert("삭제 완료!");
                router.push('/')
            },
            onError: (error) => {
                alert("삭제에 실패하였습니다. 잠시 후 다시 시도해주세요.");
            }
        });

    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading todo</div>; // 오류 처리


    return (
        <>
            <div className="mt-24pxr">
                <Item todo={data} isDetail={true} onTitleChange={handleTitleChange} />
            </div>
            <div className="flex w-full mt-24pxr gap-24pxr flex-col lg:flex-row">
                <div className="flex-1 max-w-full lg:max-w-384pxr min-w-0 min-w-0 basis-auto">
                    <ImageUploader imageUrl={data.imageUrl} onImageChange={handleImageChange} />
                </div>
                <div className="flex-1 max-w-full lg:max-w-588pxr min-w-0 basis-auto">
                    <Memo memoText={data.memo} onMemoChange={handleMemoChange} />
                </div>
            </div>
            <div className="flex justify-center lg:justify-end mt-24pxr gap-16pxr">
                <CustomButton text="수정 완료" disabled={!isBtnActive} bgColor={isBtnActive ? "bg-lime" : "bg-slate-200"} icon="check" onClick={handleUpdateClick} />
                <CustomButton text="삭제하기" bgColor="bg-rose" icon="x" color="text-white" onClick={handleDeleteItem} />
            </div>
        </>
    );
}

export default ItemsPage;