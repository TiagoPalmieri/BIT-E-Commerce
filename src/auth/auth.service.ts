import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './jwt.payload';
import { LoginUserDto } from 'src/users/dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userData: LoginUserDto) {
    const user = await this.usersService.validateUser(userData);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    
    const payload: JwtPayload = { email: user.email, id: user.id, fullname: user.fullname };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}