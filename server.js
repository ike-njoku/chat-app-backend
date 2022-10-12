import { cpus } from 'node:os';
import express from 'express'
import cluster from 'node:cluster';
const PORT = process.env.PORT || 4000;
const app = express();
app.user(express.json);


if (cluster.isPrimary) {
  for (let i = 0; i < cpus().length; i++) {
    cluster.fork();
  }

} else {
  app.listen(PORT, () => console.log(`Server running ... 🏃🏾‍♂️🏃🏾‍♂️🏃🏾‍♂️ on port ${PORT}`))
}

cluster.on('exit', (worker) => {
  console.info(`
    process with pid: ${worker.process.pid} died...
    Starting new process
  `)
  cluster.fork();
});
