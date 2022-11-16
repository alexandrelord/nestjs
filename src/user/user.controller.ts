import {
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Controller,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAll(): object {
    return this.userService.getUsers();
  }

  @Post()
  store(@Body() createUserDto: CreateUserDto): object {
    return this.userService.createUser(createUserDto);
  }

  @Get('/:userId')
  getOne(@Param('userId', ParseIntPipe) userId: number): object {
    return this.userService.showUser(userId);
  }

  @Patch('/:userId')
  updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @Param('userId', ParseIntPipe) userId: number,
  ): object {
    return this.userService.updateUser(updateUserDto, userId);
  }

  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number): object {
    return this.userService.deleteUser(userId);
  }
}
