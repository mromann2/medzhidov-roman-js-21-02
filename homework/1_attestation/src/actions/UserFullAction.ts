import { Dispatch } from 'redux';
import { getUserFullData } from '../api/dummyAPI';
import { UserFullData } from '../types/API';
import { UserFullActionType } from '../types/actions';
import { CLEAR_USER_FULL, ERROR_USER_FULL, GET_USER_FULL } from '../constants/actions/UserFull';

const getUserFullCreator = (response: UserFullData) => ({
    type: GET_USER_FULL,
    userFull: response,
});

const errorUserFullCreator = (response: UserFullData) => ({
    type: ERROR_USER_FULL,
    error: response,
});

export const ClearUserFullCreator = () => ({
    type: CLEAR_USER_FULL,
});


export const getUserFull = (id: string) => (dispatch: Dispatch) => {
    getUserFullData(id)
        .then((response: UserFullData) => {
            if (response.id) {
                dispatch(getUserFullCreator(response));
            } else {
                dispatch(errorUserFullCreator(response));
            }
        });
};

