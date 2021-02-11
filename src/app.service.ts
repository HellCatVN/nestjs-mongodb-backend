import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  HellCatVN(): {
    [key: string]: string;
  } {
    return {
      message: 'This Is HellCatVN Blog Service',
    };
  }
}
