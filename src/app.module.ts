import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { TaskModule } from './task/task.module';

const MONGO_URI =
  process.env.MONGO_URI ||
  'mongodb://root:example@localhost:27017/mytodo?authSource=admin';
@Module({
  imports: [MongooseModule.forRoot(MONGO_URI), UsersModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
