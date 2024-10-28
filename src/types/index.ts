// Item type
export interface GetTodoItem {
    isCompleted: boolean;
    name: string;
    id: number;
}

// Item 상세 type
export interface GetTodoItemDetail extends GetTodoItem {
    imageUrl?: string | null;
    memo?: string;
    tenantId?: string;
}

// Item 추가 type
export interface PostTodoItem {
    name: string;
    memo?: string | null;
    imageUrl?: string | null;
    isCompleted: boolean;
    id: number;
}

// Item 수정 type
export interface PatchTodoItem {
    name?: string;
    memo?: string | null;
    imageUrl?: string | null;
    isCompleted: boolean;
}