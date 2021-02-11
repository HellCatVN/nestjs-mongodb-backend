import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { AuthService } from '@modules/auth/auth.service';
import { CreateUserDto } from './users.dto';
import { CreateUser } from './users.decorator';
import { HttpException, HttpStatus } from '@nestjs/common';
import { LoginDto } from '@modules/auth/auth.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<any> {
    return this.authService.login(loginDto);
  }

  @CreateUser(CreateUserDto)
  async createUser(@Body() createUserDto: CreateUserDto): Promise<any> {
    const userInfo = await this.usersService.checkUserExists(
      createUserDto.username,
      createUserDto.email,
    );
    if (!userInfo) {
      return {
        statusCode: HttpStatus.OK,
        data: await this.usersService.createUser(createUserDto),
      };
    }
    throw new HttpException(
      {
        status: HttpStatus.BAD_REQUEST,
        error: 'Users is already created',
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
