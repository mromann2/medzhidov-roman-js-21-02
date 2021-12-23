 const userService = {
  GET_USERS_LIST_INPUT_PARAMS: '[UserService.getUserList] URL PARAMS query={}',
  GET_USERS_LIST_SUCCESS: '[UserService.getUserList] success statuses={} response={}',
  GET_USERS_LIST_ERROR: '[UserService.getUserList] error statuses={} response={}',

  GET_USER_BY_ID_URL_PARAMS: '[UserService.getUserById] URL PARAMS params={}',
  GET_USER_BY_ID_SUCCESS: '[UserService.getUserById] success statuses={} response={}',
  GET_USER_BY_ID_ERROR: '[UserService.getUserById] error statuses={} response={}',

  CREATE_USER_INPUT_DATA: '[UserService.createUser] INPUT DATA body={}',
  CREATE_USER_SUCCESS: '[UserService.createUser] success statuses={} response={}',
  CREATE_USER_FAIL: '[UserService.createUser] fail statuses={} response={}',
  CREATE_USER_ERROR: '[UserService.createUser] error statuses={} response={}',

  UPDATE_USER_BY_ID_INPUT_DATA: '[UserService.updateUser] INPUT DATA id={} body={}',
  UPDATE_USER_BY_ID_SUCCESS: '[UserService.updateUser] success statuses={} response={}',
  UPDATE_USER_BY_ID_ERROR: '[UserService.updateUser] error statuses={} response={}',
}

export default userService;
