import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import LogIn from '../../../forms/log-in/LogIn';
import { EMPTY_STRING } from '../../../constants/common';
import * as actions from '../../../actions/UserProfileAction';

const mockStore = configureStore([thunk]);

jest.mock('../../../actions/UserProfileAction');

window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener() {},
    removeListener() {},
  };
};

describe('Login form test', () => {
  test('should render login form', () => {
    const store = mockStore({
      userData: {
        error: EMPTY_STRING,
        authorizedUser: {
          isAuthorized: false,
        },
        userData: {},
      },
    });
    store.dispatch = jest.fn();
    const wrapper = mount(<LogIn store={store} />);
    expect(wrapper.find('div.form-login')).toHaveLength(1);
  });

  test('should render login form', () => {
    const store = mockStore({
      userData: {
        error: EMPTY_STRING,
        authorizedUser: {
          isAuthorized: false,
        },
        userData: {},
      },
    });
    store.dispatch = jest.fn();
    const wrapper = mount(<LogIn store={store} />);
    expect(wrapper.find('div.form-login')).toHaveLength(1);
  });

  test('should call clearUserProfile action', () => {
    const store = mockStore({
      userData: {
        error: EMPTY_STRING,
        authorizedUser: {
          isAuthorized: false,
        },
        userData: {},
      },
    });
    store.dispatch = jest.fn();
    mount(<LogIn store={store} />);
    expect(actions.clearUserData).toBeCalled();
  });
});
