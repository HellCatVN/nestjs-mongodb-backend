import { Controller, Get } from '@nestjs/common';
import { WinstonLogger } from '@logger';
import { UsersService } from './users.service';
import { Users } from './schemas/user.schema';

@Controller('cats')
export class UsersController {
  constructor(
    private readonly logger: WinstonLogger,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  async findAll(): Promise<Users[]> {
    this.logger.trace('test logger', {
      tag: 'OMG',
    });
    return this.usersService.findAll();
  }
}
