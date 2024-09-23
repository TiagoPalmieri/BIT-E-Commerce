import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from './jwt.payload';
import { UsersService } from '../users/users.service'
import * as fs from 'fs'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private usersService: UsersService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: fs.readFileSync('./certificates/server.key')
        });
    }

    async validate(payload: JwtPayload) {
        const user = await this.usersService.findOneByEmail(payload.email)
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}