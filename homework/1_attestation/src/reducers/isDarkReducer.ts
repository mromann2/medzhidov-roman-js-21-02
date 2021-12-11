import { IsDarkActionType } from '../types/actions';
import { IS_DARK } from '../constants/actions/IsDark';

const initialState = {
    isDark: localStorage.getItem('isDark') || false,

};

export const IsDarkReducer = (state = initialState, action: IsDarkActionType) => {
    switch (action.type) {
        case IS_DARK:
            return { ...state, isDark: action.isDark };
        default: return state;
    }
};
