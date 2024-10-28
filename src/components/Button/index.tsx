"use client";

import Image from "next/image";


interface ButtonProps {
    width?: string;
    height?: string;
    text?: string;
    color?: string;
    bgColor?: string;
    disabled?: boolean;
    icon: 'check' | 'plus_gray' | 'plus_black' | 'plus_white' | 'x';
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}


const CustomButton = ({
    width = 'w-164pxr', // 기본 너비
    height = 'h-52pxr', // 기본 높이
    text,
    color,
    bgColor,
    disabled = false,
    icon,
    onClick,
}: ButtonProps) => {
    return (
        <button
            className={`${width} ${height} relative flex items-center justify-center ${bgColor} rounded-3xl border-2 border-slate-900 drop-shadow-[4px_4px_rgb(15,23,42)]`}
            onClick={onClick}
            disabled={disabled}
        >
            <div className="flex items-center gap-4pxr z-10">
                <Image
                    src={`/images/icon/${icon}.svg`}
                    alt="Logo"
                    width="16"
                    height="16"
                />
                <p className={`b-16 ${color}`}>{text}</p>
            </div>
        </button>
    );
};

export default CustomButton;