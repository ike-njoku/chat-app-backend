import fs from 'node:fs';
const logsFolderLocation = `${__dirname}/logs`;
const errorLogsLocation = `${__dirname}/logs/errors.txt`;
const eventLogsLocation = `${__dirname}/logs/events.txt`;


const createLogsFolder = () => {
  if (!fs.existsSync(logsFolderLocation)) {
    const logsFolder = fs.mkdir(__dirname + '/logs',
      () => console.log('Created logs folder')
    );
  }
}

const createErrorLogs = () => {
  if (!fs.existsSync(errorLogsLocation)) {
    const errorLogs = fs.writeFile(errorLogsLocation,
      `Error Logs From ${Date.now()}`,
      () => console.log('Created Error Logs')
    )
  }
}

const createEventLogs = () => {
  if (!fs.existsSync(eventLogsLocation)) {
    const eventLogs = fs.writeFile(eventLogsLocation,
      `Event Logs From ${Date.now()}`,
      () => console.log('Created Event Logs')
    )
  }
}

export const createApplicationLogs = () => {
  createLogsFolder();
  createErrorLogs();
  createEventLogs();
}

export const logEvent = (event: any) => {
  
}

export const logError = (error: any)  => {
  console.log(error);
  fs.appendFile(errorLogsLocation, `\n ${Date.now()}: An error occured: ${error.message}`, () => {
    console.log(error.message, 'Logged in ', errorLogsLocation);
  })
}