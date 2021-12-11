import { UserFullActionType } from '../types/actions';
import { CLEAR_USER_FULL, ERROR_USER_FULL, GET_USER_FULL } from '../constants/actions/UserFull';

const initialState = {
    userFull: {},
};

export const UserFullReducer = (state = initialState, action: UserFullActionType) => {
    switch (action.type) {
        case GET_USER_FULL:
            return { ...state, userFull: { ...action.userFull } };
        case CLEAR_USER_FULL:
            return { ...state, userFull: {}, error: '' };
        case ERROR_USER_FULL:
            return { ...state, error: action.error };
        default: return state;
    }
};
