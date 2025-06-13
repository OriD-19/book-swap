import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET ?? 'superSecret',
            signOptions: { expiresIn: '1h' }, // Token expiration time
        }),
        UsersModule,
        PassportModule,
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [JwtModule]
})
export class AuthModule { }
