import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { JwtAuthGuard } from 'src/auth/jwtAuth.guard';
import { create } from 'domain';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';

@ApiTags('books')
@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) { }


    @Post()
    @ApiSecurity('bearer')
    @ApiOperation({ summary: 'Create a new book' })
    @ApiResponse({ status: 201, description: "Successfully created a book" })
    @ApiResponse({ status: 400, description: "Bad request when creating a new book" })
    @ApiResponse({ status: 401, description: "Unauthorized - Need credentials (JWT)" })
    @UseGuards(JwtAuthGuard)
    async create(@Body() createBookDto: CreateBookDto, @Req() req) {
        const { owner, ...book } = await this.booksService.create(createBookDto, req.user);

        return book;
    }
}
