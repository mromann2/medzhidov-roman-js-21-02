import { Dispatch } from 'redux';
import { getPostsData } from '../api/dummyAPI';
import { UserPreviewData } from '../types/API';
import { UsersCardsListActionType } from '../types/actions';
import { GET_POSTS_LIST } from '../constants/actions/PostsList';

const postsListCreator = (posts: Array<UserPreviewData>, total: number): UsersCardsListActionType => ({
        type: GET_POSTS_LIST,
        data: posts,
        total,
    });

export const loadPostsList = (page: number, limit: number) => (dispatch: Dispatch) => {
        getPostsData(page, limit)
            .then((response: any) => dispatch(postsListCreator(response.data, response.total)));
        };
