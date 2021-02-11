import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { HttpException, HttpStatus } from '@nestjs/common';
import { LoginDto, LoginResponseDto } from './auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const userInfo = await this.usersService.findUserForLogin(username);
    if (userInfo && bcrypt.compareSync(password, userInfo.password)) {
      delete userInfo.password;
      return userInfo;
    }
    return null;
  }

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const validateResult = await this.validateUser(
      loginDto.username,
      loginDto.password,
    );
    if (validateResult) {
      const payload = { validateResult };
      return {
        statusCode: HttpStatus.OK,
        data: {
          access_token: this.jwtService.sign(payload),
        },
      };
    } else {
      throw new HttpException(
        {
          statusCode: HttpStatus.UNAUTHORIZED,
          error: 'Username or password was incorrect',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
