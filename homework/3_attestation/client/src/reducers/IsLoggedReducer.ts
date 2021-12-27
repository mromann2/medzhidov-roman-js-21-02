import { IsLoggedActionType } from '../types/actions';
import { IS_LOGGED } from '../constants/actions/IsLogged';

const initialState = {
    isLogged: localStorage.getItem('isLogged') || false,
    isLoggedFirstName: localStorage.getItem('firstName') || '',
    isLoggedID: localStorage.getItem('ID') || '',
};

export const IsLoggedReducer = (state = initialState, action: IsLoggedActionType) => {
    switch (action.type) {
        case IS_LOGGED:
            return { ...state, isLogged: action.isLogged };
        default: return state;
    }
};
