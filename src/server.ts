import { cpus } from 'node:os';
import cluster from 'node:cluster';
import process from 'node:process';
import { createApplicationLogs } from './logger';
import {app} from './app';
import { connectDB } from './db';
const PORT = 4000;

createApplicationLogs();
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
