export interface ListResponseType<T> {
    data: Array<T>;
    total: number;
    page: number;
    limit: number;
}

export interface UserType {
    id?: string;
    title?: string;
    firstName?: string;
    lastName?: string;
    picture?: string;
}

export interface UserListResponse extends ListResponseType<UserType> {

}
