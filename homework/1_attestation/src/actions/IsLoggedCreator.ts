import { UserFullData } from '../types/API';
import { IS_LOGGED } from '../constants/actions/IsLogged';

export const isLoggedCreator = (logged: boolean) => ({
    type: IS_LOGGED,
    isLogged: logged,
});
