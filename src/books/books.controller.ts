import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { JwtAuthGuard } from 'src/auth/jwtAuth.guard';
import { create } from 'domain';
import { AuthGuard } from '@nestjs/passport';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) { }

    @Post()
    @UseGuards(JwtAuthGuard)
    async create(@Body() createBookDto: CreateBookDto, @Req() req) {
        const { owner, ...book} = await this.booksService.create(createBookDto, req.user);

        return book;
    }
}
