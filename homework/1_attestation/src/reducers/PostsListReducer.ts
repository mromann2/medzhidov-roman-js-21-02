import { UsersCardsListActionType } from '../types/actions';
import { GET_POSTS_LIST } from '../constants/actions/PostsList';

const initialState = {
    posts: [],
    total: 0,
};

export const PostsListReducer = (state = initialState, action: UsersCardsListActionType) => {
    switch (action.type) {
        case GET_POSTS_LIST:
            return { ...state, posts: action.data ? [...action.data] : [], total: action.total };
        default: return state;
    }
};
