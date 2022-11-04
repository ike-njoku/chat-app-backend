"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logEvent = exports.createApplicationLogs = void 0;
const node_fs_1 = __importDefault(require("node:fs"));
const createLogsFolder = () => {
    const logsFolderLocation = `${__dirname}/logs`;
    if (!node_fs_1.default.existsSync(logsFolderLocation)) {
        const logsFolder = node_fs_1.default.mkdir(__dirname + '/logs', () => console.log('Created logs folder'));
    }
};
const createErrorLogs = () => {
    const errorLogsLocation = `${__dirname}/logs/errors.txt`;
    if (!node_fs_1.default.existsSync(errorLogsLocation)) {
        const errorLogs = node_fs_1.default.writeFile(errorLogsLocation, `Error Logs From ${Date.now()}`, () => console.log('Created Error Logs'));
    }
};
const createEventLogs = () => {
    const eventLogsLocation = `${__dirname}/logs/events.txt`;
    if (!node_fs_1.default.existsSync(eventLogsLocation)) {
        const eventLogs = node_fs_1.default.writeFile(eventLogsLocation, `Event Logs From ${Date.now()}`, () => console.log('Created Event Logs'));
    }
};
const createApplicationLogs = () => {
    createLogsFolder();
    createErrorLogs();
    createEventLogs();
};
exports.createApplicationLogs = createApplicationLogs;
const logEvent = (event) => {
};
exports.logEvent = logEvent;
