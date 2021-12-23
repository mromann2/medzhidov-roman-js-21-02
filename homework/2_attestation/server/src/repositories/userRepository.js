import fetch from "node-fetch";
import {
  APP_ID_FIELD,
  APP_ID_VALUE,
  CREATE_USER_URL, defaultLimitValue,
  defaultPageValue,
  METHOD_GET,
  METHOD_POST, METHOD_PUT,
  USER_URL
} from "../constants/api.js";
import logFile from "../logger.js";
import format from "string-format";
import { loggerMessages as msg } from "../constants/logger-messages/loggerMessages.js";
import UserMapper from "../mappers/userMapper.js";
import statuses from "../../constants/statuses.js";

class UserRepository {
  getUsersList(page = defaultPageValue, limit = defaultLimitValue) {
    logFile.info(format(msg.userRepository.GET_USERS_LIST_SEARCH_PARAMS, page, limit))
    return fetch(`${USER_URL}?page=${page}&limit=${limit}`, {
      method: METHOD_GET,
      headers: {
        [APP_ID_FIELD]: APP_ID_VALUE,
      },
    })
      .then(apiResponse => apiResponse.json())
      .then(response => {
        logFile.info(format(msg.userRepository.GET_USERS_LIST_SUCCESS, statuses.OK, JSON.stringify(response)))
        return response
      })
      .catch((error) => {
        logFile.error(format(msg.userRepository.GET_USERS_LIST_ERROR, statuses.UNKNOWN_ERROR, error))
        return error
      })
  }
  getUserFullData(id) {
    logFile.info(format(msg.userRepository.GET_USER_FULL_DATA_INVOKE, `${USER_URL}/${id}`))
    return fetch(`${USER_URL}/${id}`, {
      method: METHOD_GET,
      headers: {
        [APP_ID_FIELD]: APP_ID_VALUE,
      },
    })
        .then(apiResponse => apiResponse.json())
        .then(response => {
          logFile.info(format(msg.userRepository.GET_USER_FULL_DATA_SUCCESS, statuses.OK, JSON.stringify(response)))
          if (JSON.stringify(response).includes('error')) return response
          const formattedResponse = UserMapper.formatUserFullData(response)
          logFile.info(format(msg.userRepository.GET_USER_FULL_DATA_MAPPER_REPLY_RESULT, JSON.stringify(formattedResponse)))
          return formattedResponse
        })
        .catch((error) => {
          logFile.error(format(msg.userRepository.GET_USER_FULL_DATA_ERROR, statuses.UNKNOWN_ERROR, error))
          return error
        })
  }
  createNewUser(body) {
    logFile.info(format(msg.userRepository.CREATE_USER_INPUT_DATA, JSON.stringify(body)))
    return fetch(CREATE_USER_URL, {
      method: METHOD_POST,
      headers: {
        [APP_ID_FIELD]: APP_ID_VALUE,
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(body)
    })
      .then(apiResponse => apiResponse.json())
      .then(response => {
        logFile.info(format(msg.userRepository.CREATE_USER_SUCCESS, statuses.OK, JSON.stringify(response)))
        return response
      })
      .catch((error) => {
        logFile.error(format(msg.userRepository.CREATE_USER_ERROR, statuses.UNKNOWN_ERROR, error))
        return error
      })
  }
  updateUserData(id, body) {
    logFile.info(format(msg.userRepository.UPDATE_USER_BY_ID_INPUT_DATA, id, JSON.stringify(body)))
    return fetch(`${USER_URL}/${id}`, {
      method: METHOD_PUT,
      headers: {
        [APP_ID_FIELD]: APP_ID_VALUE,
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(body)
    })
      .then(apiResponse => apiResponse.json())
      .then(response => {
        logFile.info(format(msg.userRepository.UPDATE_USER_BY_ID_SUCCESS, statuses.OK, JSON.stringify(response)))
        const formattedResponse = UserMapper.formatUpdatedData(response)
        logFile.info(format(msg.userRepository.UPDATE_USER_BY_ID_MAPPER_REPLY_RESULT, JSON.stringify(formattedResponse)))
        return formattedResponse
      })
      .catch((error) => {
        logFile.error(format(msg.userRepository.UPDATE_USER_BY_ID_ERROR, statuses.UNKNOWN_ERROR, error))
        return error
      })
  }
}

export default new UserRepository();
