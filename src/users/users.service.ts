import { Injectable, } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs'
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User)
  private readonly userRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto) {
    const { email, password, fullname } = createUserDto; 
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = this.userRepository.create({ email, fullname, password: hashedPassword });
    return await this.userRepository.save(newUser);
  }

  async findAll() {
    return await this.userRepository.find();;
  }

  async findOneById(id: number) {
    return await this.userRepository.findOneBy({ id });
  }

  async findOneByEmail(email: string){
    return await this.userRepository
    .createQueryBuilder('user')
    .where('user.email = :email', { email })
    .addSelect('user.password') // Selecciona explícitamente el campo "password"
    .getOne();
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }

  async validateUser(loginUserDto: LoginUserDto) {
    const user = await this.findOneByEmail(loginUserDto.email);
    if (!user) {
        console.log('User not found:', loginUserDto.email);
        return null; 
    }
    
    const passwordMatch = user.comparePassword(loginUserDto.password);
    
    if (!passwordMatch) {
        console.log('Invalid password for user:', loginUserDto.email);
        return null; 
    }

    return user; 
}
}
