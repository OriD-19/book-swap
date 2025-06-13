import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { BooksModule } from './books/books.module';
import { Book } from './books/entities/book.entity';
import { AuthModule } from './auth/auth.module';
import { PublicController } from './public.controller';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'suser',
            database: 'bookswap',
            entities: [User, Book],
            synchronize: true,
        }),
        UsersModule,
        BooksModule,
        AuthModule,
    ],
    controllers: [AppController, PublicController],
    providers: [AppService],
})
export class AppModule { }
