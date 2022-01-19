import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService,
  private jwtService:JwtService) { }
  async validateUser(username:string, password:string) {
    const user = await this.usersService.findOne(username);
    if (user && user.password === password) {
      const { password, username, ...rest } = user;
      return rest;
    }
    return null;
  }
  async login(user: any) {
    const payload = { name: user.name, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
