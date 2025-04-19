import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
//this PartialType equivalent to t
// export class UpdateUserDto {
//     readonly username?: string;
//     readonly password?: string;
//     readonly age?: number;
//   }
export class UpdateUserDto extends PartialType(CreateUserDto) {}
