'use client'

interface InputProps {
    inputValue: string; // 입력값
    setInputValue: React.Dispatch<React.SetStateAction<string>>; // 상태 업데이트 함수
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void; // 제출 핸들러
}

const Input = ({ inputValue, setInputValue, handleSubmit }: InputProps) => {
    return (
        <div className="w-full h-52pxr relative">
            <form onSubmit={handleSubmit} className="rounded-3xl h-full bg-slate-900 border-2 flex items-center border-slate-900 drop-shadow-[4px_4px_0px_rgb(15,23,42)]">
                <input
                    type="text"
                    placeholder="할 일을 입력해주세요"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full px-24pxr r-16 h-50pxr px-4 rounded-3xl text-slate-500 placeholder:text-slate-500 bg-slate-100 focus:outline-none focus:ring-0"
                />
            </form>
        </div>
    );
}

export default Input;
