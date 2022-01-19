import { UserService } from './user.service';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  UseGuards,
   Request
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UpdateUser } from './user.model';
import { LocalAuthGuard } from '../auth/local-auth.guard';
@Controller('user')
@ApiTags('users')
export class UserController {
  constructor(private userService: UserService) { }

  @Get(':id')
  getProduct(@Param('id') prodId:number) {
    return this.userService.getOneUser(prodId)
  }
  @Post()
  @ApiBody({ type: CreateUserDto})
  addUser(
    @Body() prod: CreateUserDto,
  ): any {
    return this.userService.createUser(prod)
  }
   @Patch(':id')
  @ApiBody({ type: UpdateUser })
  updateUser(
    @Param('id') prodId: number,
    @Body() prod: UpdateUser,
  ) {
    return this.userService.updateUser(prod,prodId)
  }
  @Delete(':id')
  removeUser(
    @Param('id')
    prodId: number,
  ) {
    this.userService.deleteUser(prodId);
    return null;
  }

}
