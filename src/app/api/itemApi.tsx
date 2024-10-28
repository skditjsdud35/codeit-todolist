import { PatchItem, PostItem } from "@/types"
import axios from 'axios';

// Item 리스트 조회 함수
export const fetchItems = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/items`);
    return response.data;
};

// Items 상세 조회 함수
export const fetchItemsDetail = async (id: number) => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/items/${id}`);
    return response.data;
};

// Item 추가 함수
export const addItems = async (todo: PostItem) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/items`, todo);
    return response.data;
};

// Item 수정 함수 
export const patchItems = async (id: number, todo: PatchItem) => {
    const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/items/${id}`, todo);
    return response.data;
};

// Item 삭제 함수 
export const deleteItems = async (id: number) => {
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/items/${id}`);
    return response.data;
};

// 이미지 등록 함수
export const addImage = async (formData: FormData) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/images/upload`,
        formData, // FormData 객체를 전달
        {
            headers: {
                'Content-Type': 'multipart/form-data', // multipart/form-data 헤더 설정
            },
        }
    );
    return response.data;
};