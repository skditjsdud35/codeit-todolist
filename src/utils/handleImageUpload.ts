import { addImage } from "@/app/api/itemApi";

export const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    setSelectedImage: React.Dispatch<React.SetStateAction<File | null>>,
    setBackgroundImage: React.Dispatch<React.SetStateAction<string | null>>,
    setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>
) => {
    const file = event.target.files?.[0];

    if (file) {
        // 파일 이름이 영어로만 이루어져 있는지 확인
        const fileNameRegex = /^[a-zA-Z0-9_.-]+$/;
        if (!fileNameRegex.test(file.name.split('.')[0])) {
            setErrorMessage("파일 이름은 영어로만 이루어져야 합니다.");
            setSelectedImage(null);
            setBackgroundImage(null);
            return;
        }

        // 파일 크기가 5MB 이하인지 확인
        if (file.size > 5 * 1024 * 1024) {
            setErrorMessage("파일 크기는 5MB 이하여야 합니다.");
            setSelectedImage(null);
            setBackgroundImage(null);
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await addImage(formData); // FormData 객체를 전달
            setBackgroundImage(response.url);
            setErrorMessage(null);
            setSelectedImage(file);
            return response.url; // 이미지 URL 반환
        } catch (error) {
            console.error("Error uploading image:", error);
            setErrorMessage("이미지 업로드에 실패했습니다.");
            setSelectedImage(null);
            setBackgroundImage(null);
            return null;
        }
    }
    return null; // 파일이 없을 경우 null 반환
};