import { Body, Controller, Get, Post,Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { AuthDto } from './auth/dto';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Body()dto: AuthDto, @Request() req): any{
    return this.authService.login(req.user)
  }
  
  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(@Request() req): string {
  
    return req.user;
  }
}
