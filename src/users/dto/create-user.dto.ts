import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @MaxLength(100)
  @IsNotEmpty({ message: 'Username is required' })
  readonly username: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'passwowrd is required' })
  readonly password: string;

  @ApiProperty({ required: false })
  readonly age?: number;
}
