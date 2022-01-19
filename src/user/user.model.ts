import { ApiProperty } from '@nestjs/swagger';
import { IsNumber,IsEmail, IsString, IsNotEmpty} from 'class-validator';
export class User {
  constructor(public id: string, public title: string, public price: number) {}
}

export class CreateUserDto {
  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: String })
  //@IsEmail({}, { message: 'username không hợp lệ' })
  @IsNotEmpty({ message: 'k đc để trống' })  
  username: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()  
  password: string;  
}

export class UpdateUser {
  @ApiProperty({ type: String })
  @IsString()
  name: string;
  @ApiProperty({ type: String })
  // @Isusername()  
  username: string;
  @ApiProperty({ type: String })
  @IsString()
  password: string;  
  
}
export class LoginUserDto {
  @ApiProperty({ type: String })
  username: string;
  @ApiProperty({ type: String })
  password: string;  
  
}