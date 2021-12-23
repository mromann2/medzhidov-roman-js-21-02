import { Dispatch } from 'redux';
import { getUsersData } from '../api/dummyAPI';
import { UserPreviewData } from '../types/API';
import { UsersCardsListActionType } from '../types/actions';
import { GET_USERS_CARDS_LIST } from '../constants/actions/UsersCardsList';

const usersCardsListCreator = (users: Array<UserPreviewData>, total: number): UsersCardsListActionType => ({
        type: GET_USERS_CARDS_LIST,
        data: users,
        total,
    });

export const loadCardsList = (page: number, limit: number) => (dispatch: Dispatch) => {
        getUsersData(page, limit)
            .then((response: any) => dispatch(usersCardsListCreator(response.data, response.total)));
        };



