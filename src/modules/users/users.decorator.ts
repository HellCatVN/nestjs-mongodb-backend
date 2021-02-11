import { Get, Post, Type, applyDecorators, UseGuards } from '@nestjs/common';
import {
  ApiQuery,
  ApiBody,
  ApiOperation,
  ApiMethodNotAllowedResponse,
} from '@nestjs/swagger';
import { CreateUserDto, ForgotPasswordDto } from './users.dto';
import { JwtAuthGuard } from '@modules/auth/jwt-auth.guard';
import { RolesGuard } from '@modules/guards/role/roles.guard';
import { Roles } from '@modules/guards/role/roles.decorator';

export function CreateUser(createUserDto: Type<CreateUserDto>): any {
  return applyDecorators(
    ApiBody({ type: createUserDto }),
    ApiOperation({ summary: 'Create User API' }),
    ApiMethodNotAllowedResponse({ description: 'Method is not allowed.' }),
    Post(''),
  );
}

export function findUserByEmail(): any {
  return applyDecorators(
    Roles('restaurant'),
    UseGuards(JwtAuthGuard, RolesGuard),
    ApiQuery({ name: 'email' }),
    ApiOperation({ summary: 'Find user by email' }),
    ApiMethodNotAllowedResponse({ description: 'Method is not allowed.' }),
    Get(''),
  );
}

export function forgotPasswordDecorator(
  ForgotPasswordDto: Type<ForgotPasswordDto>,
): any {
  return applyDecorators(
    ApiBody({ type: ForgotPasswordDto }),
    ApiOperation({ summary: 'Find user by email' }),
    ApiMethodNotAllowedResponse({ description: 'Method is not allowed.' }),
    Post('/forgot_password'),
  );
}
