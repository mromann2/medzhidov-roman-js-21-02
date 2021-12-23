import { UsersCardsListActionType } from '../types/actions';
import { GET_USERS_CARDS_LIST } from '../constants/actions/UsersCardsList';

const initialState = {
    usersCards: [],
    total: 0,
};

export const UsersCardsListReducer = (state = initialState, action: UsersCardsListActionType) => {
    switch (action.type) {
        case GET_USERS_CARDS_LIST:
            return { ...state, usersCards: action.data ? [...action.data] : [], total: action.total };
        default: return state;
    }
};
