import { Controller, Get, Logger, Inject } from '@nestjs/common';
import { CustomLogger } from '../logger/logger.service';
import { UsersService } from './users.service';
import { Users } from './schemas/user.schema';

@Controller('cats')
export class UsersController {
  constructor(
    @Inject(Logger) private readonly logger: CustomLogger,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  async findAll(): Promise<Users[]> {
    this.logger.trace('aaa');
    return this.usersService.findAll();
  }
}
