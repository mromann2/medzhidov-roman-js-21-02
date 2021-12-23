import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { UsersCardsListReducer } from './reducers/UsersCardsListReducer';
import { PostsListReducer } from './reducers/PostsListReducer';
import { UserFullReducer } from './reducers/UserFullReducer';
import { IsLoggedReducer } from './reducers/IsLoggedReducer';
import { IsDarkReducer } from './reducers/isDarkReducer';


export const store = createStore(
  combineReducers({
    users: UsersCardsListReducer,
    posts: PostsListReducer,
    userFull: UserFullReducer,
    isLogged: IsLoggedReducer,
    isDark: IsDarkReducer,
  }),
  applyMiddleware(thunk),
);
