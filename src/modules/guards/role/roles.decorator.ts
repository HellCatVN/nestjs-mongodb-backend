import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]): any => {
  return SetMetadata('roles', roles);
};
