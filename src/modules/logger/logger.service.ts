import { Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class CustomLogger implements LoggerService {
  log() {
    /* your implementation */
  }
  error() {
    /* your implementation */
  }
  warn() {
    /* your implementation */
  }
  debug() {
    /* your implementation */
  }
  verbose() {
    /* your implementation */
  }
  trace(message: string) {
    /* your implementation */
  }
}
