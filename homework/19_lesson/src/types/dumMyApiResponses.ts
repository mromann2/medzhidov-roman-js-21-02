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

export interface UserResponse {
    id?: string,
    title?: string,
    firstName?: string,
    lastName?: string,
    gender?: string,
    email?: string,
    dateOfBirth?: string,
    registerDate?: string,
    phone?: string,
    picture?: string,
    location?: object,
}

export interface UserListResponse extends ListResponseType<UserType> {

}
