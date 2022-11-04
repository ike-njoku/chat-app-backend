"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_os_1 = require("node:os");
const express_1 = __importDefault(require("express"));
const node_cluster_1 = __importDefault(require("node:cluster"));
const node_process_1 = __importDefault(require("node:process"));
const logger_1 = require("./logger");
(0, logger_1.createApplicationLogs)();
const PORT = node_process_1.default.env.PORT || 4000;
const app = (0, express_1.default)();
app.use(express_1.default.json);
app.get('/test', (req, res, next) => {
    console.log(req.baseUrl);
    res.json({
        message: 'Some message'
    });
});
if (node_cluster_1.default.isPrimary) {
    for (let i = 0; i < (0, node_os_1.cpus)().length; i++) {
        node_cluster_1.default.fork();
    }
}
else {
    app.listen(PORT, () => {
        console.log(`Server running ... 🏃🏾‍♂️🏃🏾‍♂️🏃🏾‍♂️ on port ${PORT}: ${node_process_1.default.pid}`);
    });
}
node_cluster_1.default.on('exit', (worker) => {
    console.info(`
    process with pid: ${worker.process.pid} died...
    Starting new process
  `);
    node_cluster_1.default.fork();
});
