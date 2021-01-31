import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AirVisual, AirVisualSchema } from '../../schemas/cat.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AirVisual.name, schema: AirVisualSchema },
    ]),
  ],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
