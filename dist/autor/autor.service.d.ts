import { Autor } from './autor.entity';
import { Repository } from 'typeorm';
import { HttpException } from '@nestjs/common';
import { CrearAutorDTO } from './dto/crear-autor.dto';
import { UpdateAutorDTO } from './dto/actualizar-autor.dto';
export declare class AutorService {
    private autorRepository;
    constructor(autorRepository: Repository<Autor>);
    createAutor(autor: CrearAutorDTO): Promise<Autor | HttpException>;
    getAutores(): Promise<Autor[]>;
    getAutor(dni: number): Promise<Autor | HttpException>;
    deleteAutor(dni: number): Promise<HttpException | import("typeorm").DeleteResult>;
    updateAutor(dni: number, autor: UpdateAutorDTO): Promise<HttpException | (Autor & UpdateAutorDTO)>;
}
