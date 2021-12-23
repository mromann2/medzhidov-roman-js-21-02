import { PostPreviewData, UserFullData, UserPreviewData } from './API';

export interface State {
    users: UsersR,
    posts: PostsR,
    userFull: UserFullR,
    isLogged: IsLoggedR,
    isDark: IsDarkR,
}

interface UsersR {
    usersCards: Array<UserPreviewData>,
    total: number,
}

interface PostsR {
    posts: Array<PostPreviewData>,
    total: number,
}

interface UserFullR {
    userFull: UserFullData,
    error: Error,
}
interface IsLoggedR {
    isLogged: boolean,
    firstName: string,
    id: string,
}

interface IsDarkR {
    isDark: boolean,
}
