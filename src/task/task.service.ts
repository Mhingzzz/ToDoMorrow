import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from 'src/schemas/task.schema';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>,
    private readonly userService: UsersService,
  ) {}
  async create(createTaskDto: CreateTaskDto) {
    var task = this.taskModel.create(createTaskDto);
    return task;
  }

  async findAll() {
    return this.taskModel.find().exec();
  }

  async findOne(id: string) {
    return this.taskModel.findById(id).exec();
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    var updateTask = this.taskModel.findByIdAndUpdate(id, updateTaskDto, {
      runValidators: true,
      upsert: true,
      new: true,
    });
    return updateTask;
  }

  async remove(id: string) {
    try {
      const result = await this.taskModel.findByIdAndDelete(id).exec();
      if (!result) {
        return { message: 'Task not found' };
      }
      return { message: 'Task deleted successfully' };
    } catch (error) {
      throw new Error('Error deleting task: ' + error.message);
    }
  }

  async findTasksByUserId(userId: string) {
    var result = this.taskModel.find({ userId }).populate('userId').exec();
    return result;
  }
}
