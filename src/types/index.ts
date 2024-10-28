// Item type
export interface GetItem {
    isCompleted: boolean;
    name: string;
    id: number;
}

// Item 상세 type
export interface GetItemDetail extends GetItem {
    imageUrl?: string | null;
    memo?: string;
    tenantId?: string;
}

// Item 추가 type
export interface PostItem {
    name: string;
}

// Item 수정 type
export interface PatchItem {
    name?: string;
    memo?: string | null;
    imageUrl?: string | null;
    isCompleted: boolean;
}