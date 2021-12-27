import express from 'express';
import { config } from '../config/config.js';
import context from 'request-context';
import { v4 as generateUUID } from 'uuid';
import routes from "./routes/index.js";
import statuses from "../constants/statuses.js";
import fs from 'fs';

const app = express();


if (!fs.existsSync('./logs')) {
  fs.mkdirSync('./logs');
}

app.use(express.json())
app.use(context.middleware('request'))
app.use((req, res, next) => {
  context.set('uuid', generateUUID())
  res.type('text/plain')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    .set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

app.use('/api', routes)

app.use((err, req, res, next) => {
  console.log(err)
  res.status(statuses.SERVER_ERROR).send(err.toString())
  next()
})

app.listen(
  config.port,
  config.host,
  () => console.log(`Server started at ${config.host}:${config.port}`)
)
