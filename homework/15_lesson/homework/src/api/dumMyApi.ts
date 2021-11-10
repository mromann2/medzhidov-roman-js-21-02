import {
 APP_ID_FIELD, APP_ID_VALUE, LIMIT_FIELD, PAGE_FIELD, USER_URL,
} from '../constans/api/dumMyApi';
import { METHOD_GET } from '../constans/api/common';
import { UserListResponse, UserType } from '../types/dumMyApiResponses';

export const getUserList = (
    page: number,
    limit: number,
    callback: (resp: Array<UserType>) => void,
    errorCallback?: (resp: any) => void,
) => fetch(`${USER_URL}?page=${page}&limit=${limit}`, {
        method: METHOD_GET,
        headers: new Headers({
            [APP_ID_FIELD]: APP_ID_VALUE,
            [PAGE_FIELD]: page.toString(),
            [LIMIT_FIELD]: limit.toString(),
        }),
}).then((response) => response.json())
  .then((response: UserListResponse) => callback(response.data))
  .catch(errorCallback);
