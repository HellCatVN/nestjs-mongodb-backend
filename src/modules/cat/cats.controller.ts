import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { AirVisual } from '../../schemas/cat.schema';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async findAll(): Promise<AirVisual[]> {
    return this.catsService.findAll();
  }
}
