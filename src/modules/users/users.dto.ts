import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ required: true })
  username: string;
  @ApiProperty({ required: true })
  email: string;
  @ApiProperty({ required: true })
  password: string;
}

export class ForgotPasswordDto {
  @ApiProperty({ required: true })
  email: string;
}

export class CreateDto {
  @ApiProperty({ required: true })
  username: string;
  @ApiProperty({ required: true })
  email: string;
  @ApiProperty({ required: true })
  password: string;
}
