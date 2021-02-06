import { format, transports, addColors } from 'winston';
import { WinstonModule } from 'nest-winston';

// import DailyRotateFile from 'winston-daily-rotate-file';
const colorizer = format.colorize();

const customLevels = {
  levels: {
    trace: 0,
    input: 1,
    verbose: 2,
    prompt: 3,
    debug: 4,
    info: 5,
    data: 6,
    help: 7,
    warn: 8,
    error: 9,
  },
  colors: {
    trace: 'magenta',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    debug: 'blue',
    info: 'cyan',
    data: 'grey',
    help: 'green',
    warn: 'yellow',
    error: 'red',
  },
};
const winston = WinstonModule.createLogger({
  level: 'error',
  levels: customLevels.levels,
  format: format.combine(
    format.errors({ stack: true }),
    format.label({ label: 'BOT' }),
    format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
    format.printf((info) => {
      const { timestamp, label, level, message, ...rest } = info;
      return colorizer.colorize(
        level,
        `[${timestamp}][${label}][${level.toUpperCase()}]: ${message}${
          Object.keys(rest).length ? `\n${JSON.stringify(rest, null, 2)}` : ''
        }`,
      );
    }),
  ),
  transports: [
    new transports.Console({}),
    // new DailyRotateFile({
    //   format: format.combine(format.timestamp(), format.json()),
    //   level: 'error',
    //   filename: './logs/listen-%DATE%.log',
    //   maxFiles: '1d',
    // }),
  ],
});

addColors(customLevels.colors);

export default winston;
