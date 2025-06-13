import { Controller, Get } from "@nestjs/common";
import { BooksService } from "./books/books.service";

@Controller('public')
export class PublicController {
    constructor(
        private readonly booksService: BooksService
    ) { }

    @Get('books')
    getBooks() {
        return this.booksService.findAll();
    }
}
