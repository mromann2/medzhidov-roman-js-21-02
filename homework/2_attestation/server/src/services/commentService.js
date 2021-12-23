import statuses from "../../constants/statuses.js";
import logFile from "../logger.js";
import { loggerMessages as msg } from "../constants/logger-messages/loggerMessages.js";
import format from 'string-format';
import CommentRepository from "../repositories/commentRepository.js";

class CommentService {
  getCommentsByPost(req, res) {
    logFile.info(format(msg.commentService.GET_COMMENTS_BY_POST_ID_URL_PARAMS, req.params.id, req.query.page, req.query.limit))
    CommentRepository.getCommentsByPostId(req.params.id, req.query.page, req.query.limit)
      .then(response => {
        const result = JSON.stringify(response);
        logFile.info(format(msg.commentService.GET_COMMENTS_BY_POST_ID_SUCCESS, statuses.OK, result))
        res.status(statuses.OK).send(result)
      })
      .catch(error => {
        logFile.error(format(msg.commentService.GET_COMMENTS_BY_POST_ID_ERROR, error))
        res.status(statuses.UNKNOWN_ERROR)
          .json({
            status: statuses.UNKNOWN_ERROR,
            error: error.message,
          })
      })
  }
}

export default new CommentService();
