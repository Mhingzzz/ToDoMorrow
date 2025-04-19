import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from 'src/schemas/task.schema';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>,
  ) {}
  create(createTaskDto: CreateTaskDto) {
    var task = this.taskModel.create(createTaskDto);
    return task;
  }

  findAll() {
    return this.taskModel.find().exec();
  }

  findOne(id: string) {
    return this.taskModel.findById(id).exec();
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    var updateTask = this.taskModel.findByIdAndUpdate(id, updateTaskDto, {
      runValidators: true,
      upsert: true,
      new: true,
    });
    return updateTask;
  }

  remove(id: string) {
    return this.taskModel.findByIdAndDelete(id).exec();
  }
}
