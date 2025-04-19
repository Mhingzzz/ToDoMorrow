import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from 'src/schemas/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private userModel: Model<UsersDocument>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<Users> {
    const result = new this.userModel(createUserDto);
    return result.save();
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const result = this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true, runValidators: true })
      .exec();
    return result;
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
