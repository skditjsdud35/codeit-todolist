'use client'

import { ChangeEvent, useEffect, useState } from "react";

interface MemoContainerProps {
    memoText: string | null;
    onMemoChange?: (memoText: string) => void;
}

const Memo = ({ memoText, onMemoChange }: MemoContainerProps) => {
    const [memo, setMemo] = useState<string>(memoText || "");

    useEffect(() => {
        setMemo(memoText || ""); // null 체크 후 상태 업데이트

    }, [memoText]);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const newMemo = event.target.value;
        setMemo(newMemo); // 상태 업데이트
        if (onMemoChange) {
            onMemoChange(newMemo); // 부모 컴포넌트에 변경된 텍스트 전달
        }
    };

    return (
        <div className="flex flex-col h-311pxr items-center rounded-3xl overflow-y-auto bg-[url('/images/memo.svg')] bg-cover bg-center bg-no-repeat memo-scrollbar">
            <div className='flex justify-center h-auto mt-24pxr'>
                <p className='text-amber eb-16'>Memo</p>
            </div>
            <textarea
                className='bg-slate-50 bg-opacity-0 mt-auto px-16pxr mb-24pxr flex justify-center text-center r-16 w-full h-229pxr resize-none border-none outline-none overflow-y-auto memo-scrollbar'
                value={memo}
                onChange={handleChange} />
        </div>
    )
};

export default Memo;