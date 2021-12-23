import { PostPreviewData, UserFullData, UserPreviewData } from './API';

export interface ActionType {
    type: string;
}
export interface UsersCardsListActionType extends ActionType {
    data: Array<UserPreviewData>;
    total: number
    page?: number;
}

export interface PostsListActionType extends ActionType {
    data: Array<PostPreviewData>;
    total: number
    page?: number;
}

export interface UserFullActionType extends ActionType {
    userFull?: UserFullData,
    error?: string,
}
export interface IsLoggedActionType extends ActionType {
    isLogged: boolean,
}

export interface IsDarkActionType extends ActionType {
    isDark: boolean,
}
