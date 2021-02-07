import { Injectable } from '@nestjs/common';
import {
  createLogger,
  format,
  Logger as LoggerWinston,
  addColors,
  transports,
  LeveledLogMethod,
} from 'winston';
import 'winston-daily-rotate-file';

@Injectable()
export class WinstonLogger {
  private readonly logger: LoggerWinston;

  constructor() {
    // super();
    const colorizer = format.colorize();
    const customLevels = {
      levels: {
        trace: 0,
        input: 1,
        verbose: 2, // Nest Default
        prompt: 3,
        debug: 4, // Nest Default
        info: 5,
        data: 6,
        help: 7,
        warn: 8, // Nest default
        error: 9, // Nest Default is error so we change into err for our format
        // level: log | is not our custom
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

    const logger = createLogger({
      level: 'error',
      levels: customLevels.levels,
      format: format.combine(
        format.errors({ stack: true }),
        format.label({ label: 'HellCatVN' }),
        format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
        format.printf((info) => {
          const { timestamp, label, level, message, ...rest } = info;
          return colorizer.colorize(
            level,
            `[${timestamp}][${label}][${level.toUpperCase()}]: ${message}${
              Object.keys(rest).length
                ? `\n${JSON.stringify(rest, null, 2)}`
                : ''
            }`,
          );
        }),
      ),
      transports: [
        new transports.Console({}),
        new transports.DailyRotateFile({
          format: format.combine(format.timestamp(), format.json()),
          level: 'error',
          filename: './logs/listen-%DATE%.log',
          maxFiles: '1d',
        }),
      ],
    }) as LoggerWinston &
      Record<keyof typeof customLevels['levels'], LeveledLogMethod>;
    addColors(customLevels.colors);
    this.logger = logger;
  }

  trace(
    message: string,
    rest?: {
      [key: string]: any;
    },
  ) {
    this.logger.log('trace', message, rest);
  }

  input(
    message: string,
    rest?: {
      [key: string]: any;
    },
  ) {
    this.logger.log('input', message, rest);
  }

  verbose(
    message: string,
    rest?: {
      [key: string]: any;
    },
  ) {
    this.logger.log('verbose', message, rest);
  }

  prompt(
    message: string,
    rest?: {
      [key: string]: any;
    },
  ) {
    this.logger.log('prompt', message, rest);
  }

  debug(
    message: string,
    rest?: {
      [key: string]: any;
    },
  ) {
    this.logger.log('debug', message, rest);
  }

  info(
    message: string,
    rest?: {
      [key: string]: any;
    },
  ) {
    this.logger.log('info', message, rest);
  }

  help(
    message: string,
    rest?: {
      [key: string]: any;
    },
  ) {
    this.logger.log('help', message, rest);
  }

  data(
    message: string,
    rest?: {
      [key: string]: any;
    },
  ) {
    this.logger.log('data', message, rest);
  }

  warn(
    message: string,
    rest?: {
      [key: string]: any;
    },
  ) {
    this.logger.log('warn', message, rest);
  }

  error(
    message: string,
    rest?: {
      [key: string]: any;
    },
  ) {
    this.logger.log('error', message, rest);
  }
}
