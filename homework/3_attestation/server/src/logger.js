import context from "request-context";
import logger from 'simple-node-logger';

const options = {
  logDirectory:'./logs',
  fileNamePattern: '<DATE>.log',
  dateFormat: 'DD.MM.YYYY'
}

const log = logger.createRollingFileLogger(options)

const logFile = {
  ...log,
  info: (message) => log.info(context.get('uuid'), ' ', message),
  error: (message) => log.error(context.get('uuid'), ' ', message),
  fatal: (message) => log.fatal(context.get('uuid'), ' ', message),
}

export default logFile;
