import { Libro } from './libro.entity';
import { Repository } from 'typeorm';
import { CrearLibroDTO } from './dto/crear-libro.dto';
import { HttpException } from '@nestjs/common';
import { ActualizarLibroDTO } from './dto/actualizar-libro.dto';
import { Editorial } from 'src/editorial/editorial.entity';
import { Autor } from 'src/autor/autor.entity';
export declare class LibroService {
    private libroRepository;
    private editorialRepository;
    private autorRepository;
    constructor(libroRepository: Repository<Libro>, editorialRepository: Repository<Editorial>, autorRepository: Repository<Autor>);
    crearLibro(libro: CrearLibroDTO): Promise<Libro | HttpException>;
    getLibrosEditorialesAutores(): Promise<{
        libros: Libro[];
        editoriales: Editorial[];
        autores: Autor[];
    }>;
    getLibroEditorialAutor(nombre: string): Promise<HttpException | {
        nombreLibro: Libro;
        autor: Autor;
        editorial: Editorial;
    }>;
    deleteLibro(nombre: string): Promise<HttpException | import("typeorm").DeleteResult>;
    updateLibro(nombre: string, libro: ActualizarLibroDTO): Promise<HttpException | (Libro & ActualizarLibroDTO)>;
}
