import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private bookRepository: Repository<Book>,
        private readonly userService: UsersService,
    ) { }

    async create(createBookDto: CreateBookDto, jwtPayload: { userId: number }): Promise<Book> {

        const owner = await this.userService.findById(jwtPayload.userId);

        if (!owner) {
            throw new Error('User not found');
        }

        const book = this.bookRepository.create({
            author: createBookDto.author,
            title: createBookDto.title,
            description: createBookDto.description,
            owner: owner,
        });

        return this.bookRepository.save(book);
    }

    async findAll(): Promise<Book[]> {
        return this.bookRepository.find({
            relations: ['owner'],
            select: {
                owner: {
                    'name': true,
                },
            }
        });
    }
}
