
import {
    CREATE_USER_URL, METHOD_GET, METHOD_POST, METHOD_PUT, POST_URL, USER_URL,
} from '../constants/api/dummyApi';
import { Error, UserFullData } from '../types/API';

export const getUsersData = (
    page: number,
    limit: number,
) => fetch(`${USER_URL}?page=${page}&limit=${limit}`, {
        method: METHOD_GET,
    }).then((response) => response.json());

export const getPostsData = (
    page: number,
    limit: number,
) => fetch(`${POST_URL}?page=${page}&limit=${limit}`, {
    method: METHOD_GET,
}).then((response) => response.json());

export const getUserFullData = (
    id: string,
) => fetch(`${USER_URL}/${id}`, {
        method: METHOD_GET,
    }).then((response) => response.json()).catch(console.log);


export const postNewUser = (
    userData: UserFullData,
    resolveCallback: (responseUserData: UserFullData) => void,
    errorCallback?: (response: Error) => void,
    finalCallback?: () => void,
) => fetch(CREATE_USER_URL, {
    method: METHOD_POST,
    headers: new Headers({
        'Content-Type': 'application/json',
    }),
    body: JSON.stringify(userData),
}).then((response) => response.json())
    .then((response: UserFullData) => resolveCallback(response))
    .catch(errorCallback)
    .finally(finalCallback);

export const updateUser = (
    userData: UserFullData,
    resolveCallback: (responseUserData: UserFullData) => void,
    errorCallback?: (response: Error) => void,
    finalCallback?: () => void,
) => fetch(`${USER_URL}/${userData.id}`, {
    method: METHOD_PUT,
    headers: new Headers({
        'Content-Type': 'application/json',
    }),
    body: JSON.stringify(userData),
}).then((response) => response.json())
    .then((response: UserFullData) => resolveCallback(response))
    .catch(errorCallback)
    .finally(finalCallback);
