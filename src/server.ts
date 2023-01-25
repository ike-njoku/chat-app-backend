import { cpus } from 'node:os';
import cluster from 'node:cluster';
import process from 'node:process';
import { createApplicationLogs } from './logger';
import {app} from './app';
import { connectDB } from './db';
import { swaggerSpecs } from './swagger-docs-specs';
import swaggerUI from 'swagger-ui-express';
import { sendJsonResponse } from './shared/utilities/sendJsonResponse';
require('dotenv').config();
const PORT = process.env.PORT || 4000;
createApplicationLogs();

app.use('/app-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

app.use('/', (req, res) => {
  return sendJsonResponse(res, 200, {
    message: `Application running on port ${PORT}`,
    status: 'success',
    data: null
  })
});

if (cluster.isPrimary) {
  for (let i = 0; i < cpus().length; i++) {
    cluster.fork();
  }
} else {
  app.listen(PORT, () => {
    console.log(`Server running ... 🏃🏾‍♂️🏃🏾‍♂️🏃🏾‍♂️ on port ${PORT}: ${process.pid}`)
    connectDB();
  });
}

cluster.on('exit', (worker) => {
  console.info(`
    process with pid: ${worker.process.pid} died...
    Starting new process
  `)
  cluster.fork();
});
