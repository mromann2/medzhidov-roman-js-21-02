import fetch from "node-fetch";
import {
  APP_ID_FIELD,
  APP_ID_VALUE,
  defaultLimitValue,
  defaultPageValue,
  METHOD_GET, POST_URL,
} from "../constants/api.js";
import logFile from "../logger.js";
import format from "string-format";
import { loggerMessages as msg } from "../constants/logger-messages/loggerMessages.js";
import statuses from "../../constants/statuses.js";

class CommentRepository {
  getCommentsByPostId(id, page = defaultPageValue, limit = defaultLimitValue) {
    logFile.info(format(msg.commentRepository.GET_COMMENTS_BY_POST_ID_PARAMS, id, page, limit))
    return fetch(`${POST_URL}/${id}/comment?page=${page}&limit=${limit}`, {
      method: METHOD_GET,
      headers: {
        [APP_ID_FIELD]: APP_ID_VALUE,
      },
    })
      .then(apiResponse => apiResponse.json())
      .then(response => {
        logFile.info(format(msg.commentRepository.GET_COMMENTS_BY_POST_ID_SUCCESS, statuses.OK, response))
        return response
      })
      .catch((error) => {
        logFile.error(format(msg.commentRepository.GET_COMMENTS_BY_POST_ID_ERROR, statuses.UNKNOWN_ERROR, error))
        return error
      })
  }
}

export default new CommentRepository();
