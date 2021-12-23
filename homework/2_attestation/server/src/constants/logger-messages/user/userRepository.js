const userRepository = {
  GET_USERS_LIST_SEARCH_PARAMS: '[UserRepository.getUsersList] SEARCH PARAMS page={}, limit={}',
  GET_USERS_LIST_SUCCESS: '[UserRepository.getUsersList] success statuses={} response={}',
  GET_USERS_LIST_ERROR: '[UserRepository.getUsersList] error statuses={} response={}',
  GET_USERS_LIST_MAPPER_REPLY_RESULT: '[UserRepository.getUsersList] mapper result {}',

  GET_USER_FULL_DATA_INVOKE: '[UserRepository.getUserFullData] invoke fetch({})',
  GET_USER_FULL_DATA_SUCCESS: '[UserRepository.getUserFullData] success statuses={} response={}',
  GET_USER_FULL_DATA_ERROR: '[UserRepository.getUserFullData] error statuses={} response={}',
  GET_USER_FULL_DATA_MAPPER_REPLY_RESULT: '[UserRepository.getUserFullData] mapper result {}',

  CREATE_USER_INPUT_DATA: '[UserRepository.createNewUser] DATA data={}',
  CREATE_USER_SUCCESS: '[UserRepository.createNewUser] success statuses={} response={}',
  CREATE_USER_ERROR: '[UserRepository.createNewUser] error statuses={} response={}',

  UPDATE_USER_BY_ID_INPUT_DATA: '[UserRepository.updateUserData] INPUT DATA id={} body={}',
  UPDATE_USER_BY_ID_SUCCESS: '[UserRepository.updateUserData] success statuses={} response={}',
  UPDATE_USER_BY_ID_ERROR: '[UserRepository.updateUserData] error statuses={} response={}',
  UPDATE_USER_BY_ID_MAPPER_REPLY_RESULT: '[UserRepository.updateUserData] mapper result {}',
}

export default userRepository;
