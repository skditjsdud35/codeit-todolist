'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { handleImageUpload } from "@/utils/handleImageUpload";

interface ImageProps {
    imageUrl: string | undefined;
    onImageChange?: (url: string) => void;
}

const ImageUploader = ({ imageUrl, onImageChange }: ImageProps) => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [backgroundImage, setBackgroundImage] = useState<string | null>(imageUrl || null); // 배경 이미지 상태 추가

    useEffect(() => {
        if (imageUrl) {
            setBackgroundImage(imageUrl); // props로 받은 imageUrl이 있을 경우 배경 이미지 설정
        }
    }, [imageUrl]);

    const onImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const url = await handleImageUpload(event, setSelectedImage, setBackgroundImage, setErrorMessage);
        console.log(selectedImage);
        if (url && onImageChange) {
            onImageChange(url);
        }
    };

    return (
        <div className={`relative flex items-center justify-center h-311pxr rounded-3xl ${backgroundImage ? '' : 'bg-slate-50 border-dashed border-2 border-slate-300'}`} style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Image
                src="/images/icon/img.svg"
                alt="img"
                width="64"
                height="64"
                className={`absolute ${backgroundImage ? 'hidden' : 'block'}`} // 배경 이미지가 있으면 기본 이미지 숨김
            />
            <div
                className={`absolute bottom-16pxr right-16pxr flex items-center justify-center w-64pxr h-64pxr rounded-full cursor-pointer ${backgroundImage ? 'bg-slate-900 bg-opacity-50 border-2' : 'bg-slate-200 '}`}
                onClick={() => document.getElementById("fileInput")?.click()} // 클릭 시 파일 입력 클릭
            >
                <Image
                    src={backgroundImage ? "/images/icon/edit.svg" : "/images/icon/plus_gray.svg"}
                    alt="icon"
                    width="24"
                    height="24"
                />
            </div>
            <input
                type="file"
                id="fileInput"
                accept="image/*"
                className="hidden"
                onChange={onImageUpload}
            />
            {errorMessage && (
                <div className="absolute bottom-[-30px] text-red-500">
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

export default ImageUploader;
