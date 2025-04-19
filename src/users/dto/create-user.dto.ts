import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly password: string;

  @ApiProperty({ required: false })
  readonly age?: number;
}
