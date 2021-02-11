import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from './schemas/user.schema';
import { CreateUserDto } from './users.dto';
import * as bcrypt from 'bcrypt';
const saltRounds = 10;

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private userModel: Model<UsersDocument>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<any> {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(createUserDto.password, salt);
    const newUser = await this.userModel.create({
      password: hash,
      email: createUserDto.email,
      username: createUserDto.username,
    });
    delete newUser.password; // Remove password from created object
    return newUser;
  }

  async findUserForLogin(username: string): Promise<Users> {
    return this.userModel.findOne({
      $or: [{ email: username }, { username: username }],
    });
  }

  async checkUserExists(username: string, email: string): Promise<Users> {
    return this.userModel.findOne({
      $or: [{ email: email }, { username: username }],
    });
  }
}
