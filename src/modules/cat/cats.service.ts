import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AirVisual, AirVisualDocument } from '../../schemas/cat.schema';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(AirVisual.name) private catModel: Model<AirVisualDocument>,
  ) {}

  async findAll(): Promise<AirVisual[]> {
    return await this.catModel.find({}).exec();
  }
}
