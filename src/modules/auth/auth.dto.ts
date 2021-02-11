import { ApiProperty } from '@nestjs/swagger';
import { HttpException, HttpStatus } from '@nestjs/common';

export class LoginDto {
  @ApiProperty({ required: true })
  username: string;
  @ApiProperty({ required: true })
  password: string;
}

export class LoginResponseDto {
  statusCode: HttpStatus;
  data: {
    access_token: string;
  };
}
