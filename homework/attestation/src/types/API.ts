export interface UserPreviewData {
    id: string,
    title: string,
    firstName: string,
    lastName: string,
    picture: string,
}

export interface PostPreviewData {
    id: string,
    text: string,
    image: string,
    publishDate: string,
    owner: UserPreviewData
}

export interface UserFullData {
    id: string,
    title: string,
    firstName: string,
    lastName: string,
    gender: string,
    email: string,
    dateOfBirth: string,
    registerDate: string,
    phone: string,
    picture: string,
}
export interface Error {
error: string
}


