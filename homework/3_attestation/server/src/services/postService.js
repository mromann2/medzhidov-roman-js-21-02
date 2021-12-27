import UserRepository from '../repositories/userRepository.js'
import statuses from "../../constants/statuses.js";
import logFile from "../logger.js";
import { loggerMessages as msg } from "../constants/logger-messages/loggerMessages.js";
import format from 'string-format';
import PostRepository from "../repositories/postRepository.js";

class PostService {
  getPosts(req, res) {
    logFile.info(format(msg.postService.GET_POSTS_LIST_INPUT_PARAMS, JSON.stringify(req.query)));
    PostRepository.getPostsList(req.query.page, req.query.limit)
      .then(response => {
        const result = JSON.stringify(response);
        logFile.info(format(msg.postService.GET_POSTS_LIST_SUCCESS, statuses.OK, result))
        res.status(statuses.OK).send(result)
      })
      .catch(err => {
        logFile.error(msg.postService.GET_POSTS_LIST_ERROR, statuses.UNKNOWN_ERROR, err)
        res.status(statuses.UNKNOWN_ERROR)
          .json({
            status: statuses.UNKNOWN_ERROR,
            error: err.message,
          })
      })
  }
  getPostsByUser(req, res) {
    logFile.info(format(msg.postService.GET_POSTS_BY_USER_ID_URL_PARAMS, req.params.id, req.query.page, req.query.limit))
    PostRepository.getPostsByUserId(req.params.id, req.query.page, req.query.limit)
      .then(response => {
        const result = JSON.stringify(response);
        logFile.info(format(msg.postService.GET_POSTS_BY_USER_ID_SUCCESS, statuses.OK, result))
        res.status(statuses.OK).send(result)
      })
      .catch(error => {
        logFile.error(format(msg.postService.GET_POSTS_BY_USER_ID_ERROR, error))
        res.status(statuses.UNKNOWN_ERROR)
          .json({
            status: statuses.UNKNOWN_ERROR,
            error: error.message,
          })
      })
  }
}

export default new PostService();
