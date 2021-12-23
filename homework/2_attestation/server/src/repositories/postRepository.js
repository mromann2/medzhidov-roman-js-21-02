import fetch from "node-fetch";
import {
  APP_ID_FIELD,
  APP_ID_VALUE,
  CREATE_USER_URL, defaultLimitValue,
  defaultPageValue,
  METHOD_GET,
  METHOD_POST, METHOD_PUT, POST_URL,
  USER_URL
} from "../constants/api.js";
import logFile from "../logger.js";
import format from "string-format";
import { loggerMessages as msg } from "../constants/logger-messages/loggerMessages.js";
import UserMapper from "../mappers/userMapper.js";
import statuses from "../../constants/statuses.js";

class PostRepository {
  getPostsList(page = defaultPageValue, limit = defaultLimitValue) {
    logFile.info(format(msg.postRepository.GET_POSTS_LIST_SEARCH_PARAMS, page, limit))
    return fetch(`${POST_URL}?page=${page}&limit=${limit}`, {
      method: METHOD_GET,
      headers: {
        [APP_ID_FIELD]: APP_ID_VALUE,
      },
    })
      .then(apiResponse => apiResponse.json())
      .then(response => {
        logFile.info(format(msg.postRepository.GET_POSTS_LIST_SUCCESS, statuses.OK, JSON.stringify(response)))
        return response
      })
      .catch((error) => {
        logFile.error(format(msg.postRepository.GET_POSTS_LIST_ERROR, statuses.UNKNOWN_ERROR, error))
        return error
      })
  }
  getPostsByUserId(id, page = defaultPageValue, limit = defaultLimitValue) {
    logFile.info(format(msg.postRepository.GET_POSTS_BY_USER_ID_PARAMS, id, page, limit))
    return fetch(`${USER_URL}/${id}/post?page=${page}&limit=${limit}`, {
      method: METHOD_GET,
      headers: {
        [APP_ID_FIELD]: APP_ID_VALUE,
      },
    })
      .then(apiResponse => apiResponse.json())
      .then(response => {
        logFile.info(format(msg.postRepository.GET_POSTS_BY_BY_USER_ID_SUCCESS, statuses.OK, response))
        return response
      })
      .catch((error) => {
        logFile.error(format(msg.postRepository.GET_POSTS_BY_BY_USER_ID_ERROR, statuses.UNKNOWN_ERROR, error))
        return error
      })
  }
}

export default new PostRepository();
