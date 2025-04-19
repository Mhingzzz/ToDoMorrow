import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Users } from './users.schema';
class SubTask {
  @Prop({ required: true })
  title: string;
  @Prop()
  description: string;
  @Prop({ default: false })
  completed: boolean;
}
export type TaskDocument = HydratedDocument<Task>;
@Schema()
export class Task {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Users.name })
  userId: Users;

  @Prop({ required: true, unique: true })
  title: string;
  @Prop()
  description: string;

  @Prop({ default: false })
  completed: boolean;

  @Prop()
  dueDate: Date;
  @Prop({ type: [SubTask], default: [] })
  subTasks: SubTask[];
}

export const TaskSchema = SchemaFactory.createForClass(Task);
