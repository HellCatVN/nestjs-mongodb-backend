import { Module, Global } from '@nestjs/common';
import { WinstonLogger } from './winston';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [WinstonLogger],
  exports: [WinstonLogger],
})
export class LoggerModule {}
