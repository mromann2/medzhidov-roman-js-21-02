import UserRepository from '../repositories/userRepository.js'
import statuses from "../../constants/statuses.js";
import logFile from "../logger.js";
import { loggerMessages as msg } from "../constants/logger-messages/loggerMessages.js";
import format from 'string-format';

class UserService {
  getUsers(req, res) {
    logFile.info(format(msg.userService.GET_USERS_LIST_INPUT_PARAMS, JSON.stringify(req.query)));
    UserRepository.getUsersList(req.query.page, req.query.limit)
      .then(response => {
        const result = JSON.stringify(response);
        logFile.info(format(msg.userService.GET_USERS_LIST_SUCCESS, statuses.OK, result))
        res.status(statuses.OK).send(result)
      })
      .catch(err => {
        logFile.error(msg.userService.GET_USERS_LIST_ERROR, statuses.UNKNOWN_ERROR, err)
        res.status(statuses.UNKNOWN_ERROR)
          .json({
            status: statuses.UNKNOWN_ERROR,
            error: err.message,
          })
      })
  }
  getUserById(req, res) {
    logFile.info(format(msg.userService.GET_USER_BY_ID_URL_PARAMS, req.params.id))
    UserRepository.getUserFullData(req.params.id)
      .then(response => {
        const result = JSON.stringify(response);
        logFile.info(format(msg.userService.GET_USER_BY_ID_SUCCESS, statuses.OK, result))
        res.status(statuses.OK).send(result)
      })
      .catch(err => {
        logFile.error(format(msg.userService.GET_USER_BY_ID_ERROR, statuses.UNKNOWN_ERROR, err))
        res.status(statuses.UNKNOWN_ERROR)
          .json({
            status: statuses.UNKNOWN_ERROR,
            error: err.message,
          })
      })
  }
  createUser(req, res) {
    logFile.info(format(msg.userService.CREATE_USER_INPUT_DATA, JSON.stringify(req.body)))
    UserRepository.createNewUser(req.body)
      .then(response => {
        const result = JSON.stringify(response);
        logFile.info(format(msg.userService.CREATE_USER_SUCCESS, statuses.OK, result))
        res.status(statuses.OK)
          .send(result)
      })
      .catch(err => {
        logFile.error(format(msg.userService.CREATE_USER_ERROR, statuses.UNKNOWN_ERROR, err))
        res.status(statuses.UNKNOWN_ERROR)
          .json({
            status: statuses.UNKNOWN_ERROR,
            error: err.message,
          })
      })
  }
  updateUser(req, res) {
    logFile.info(format(msg.userService.UPDATE_USER_BY_ID_INPUT_DATA, req.params.id, JSON.stringify(req.body)))
    UserRepository.updateUserData(req.params.id, req.body)
      .then(response => {
        const result = JSON.stringify(response);
        logFile.info(format(msg.userService.UPDATE_USER_BY_ID_SUCCESS, statuses.OK, result))
        res.status(statuses.OK)
          .send(result)
      })
      .catch(err => {
        logFile.error(format(msg.userService.UPDATE_USER_BY_ID_ERROR, statuses.UNKNOWN_ERROR, err))
        res.status(statuses.UNKNOWN_ERROR)
          .json({
            status: statuses.UNKNOWN_ERROR,
            error: err.message,
          })
      })
  }
}

export default new UserService();
