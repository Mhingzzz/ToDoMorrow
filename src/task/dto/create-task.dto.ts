import { ApiProperty } from '@nestjs/swagger';

export class SubTaskDto {
  @ApiProperty({ description: 'The title of the subtask', required: true })
  readonly title: string;

  @ApiProperty({
    description: 'A brief description of the subtask',
    required: false,
  })
  readonly description?: string;

  @ApiProperty({
    description: 'Indicates if the subtask is completed',
    default: false,
  })
  readonly completed?: boolean;
}

export class CreateTaskDto {
  @ApiProperty({
    description: 'The ID of the user creating the task',
    type: String,
  })
  readonly userId: string;

  @ApiProperty({ description: 'The title of the task', required: true })
  readonly title: string;

  @ApiProperty({
    description: 'A brief description of the task',
    required: false,
  })
  readonly description?: string;

  @ApiProperty({
    description: 'Indicates if the task is completed',
    default: false,
  })
  readonly completed?: boolean;

  @ApiProperty({
    description: 'The due date of the task',
    required: false,
    type: String,
    format: 'date',
  })
  readonly dueDate?: Date;

  @ApiProperty({
    description: 'A list of subtasks associated with the task',
    type: () => [SubTaskDto],
    required: false,
    default: SubTaskDto,
  })
  readonly subTasks?: SubTaskDto[];
}
