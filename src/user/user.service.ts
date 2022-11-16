import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(createUserDto);
  }

  showUser(userId: number): Promise<User> {
    return this.userRepository.findOne({ where: { id: userId } });
  }

  findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }

  updateUser(updateUserDto: UpdateUserDto, userId: number): object {
    return this.userRepository.update(userId, updateUserDto);
  }

  deleteUser(userId: number): Promise<DeleteResult> {
    return this.userRepository.delete(userId);
  }
}
