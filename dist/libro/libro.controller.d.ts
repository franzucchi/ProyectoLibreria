import { LibroService } from './libro.service';
import { CrearLibroDTO } from './dto/crear-libro.dto';
import { ActualizarLibroDTO } from './dto/actualizar-libro.dto';
import { EditorialService } from 'src/editorial/editorial.service';
export declare class LibroController {
    private libroService;
    private editorialService;
    constructor(libroService: LibroService, editorialService: EditorialService);
    crearLibro(nuevoLibro: CrearLibroDTO): Promise<import("./libro.entity").Libro | import("@nestjs/common").HttpException>;
    getLibros(): Promise<{
        libros: import("./libro.entity").Libro[];
        editoriales: import("../editorial/editorial.entity").Editorial[];
        autores: import("../autor/autor.entity").Autor[];
    }>;
    getLibroEditorialAutor(titulo: string): Promise<import("@nestjs/common").HttpException | {
        nombreLibro: import("./libro.entity").Libro;
        autor: import("../autor/autor.entity").Autor;
        editorial: import("../editorial/editorial.entity").Editorial;
    }>;
    deleteLibro(titulo: string): Promise<import("@nestjs/common").HttpException | import("typeorm").DeleteResult>;
    updateLibro(titulo: string, libroactualizado: ActualizarLibroDTO): Promise<import("@nestjs/common").HttpException | (import("./libro.entity").Libro & ActualizarLibroDTO)>;
}
