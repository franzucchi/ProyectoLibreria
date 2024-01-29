import { AutorService } from './autor.service';
import { CrearAutorDTO } from './dto/crear-autor.dto';
import { UpdateAutorDTO } from './dto/actualizar-autor.dto';
export declare class AutorController {
    private autorService;
    constructor(autorService: AutorService);
    getAutores(): Promise<import("./autor.entity").Autor[]>;
    getAutor(dni: number): Promise<import("./autor.entity").Autor | import("@nestjs/common").HttpException>;
    crearAutor(newAutor: CrearAutorDTO): Promise<import("./autor.entity").Autor | import("@nestjs/common").HttpException>;
    deleteAutor(dni: number): Promise<import("@nestjs/common").HttpException | import("typeorm").DeleteResult>;
    updateAutor(dni: number, autor: UpdateAutorDTO): Promise<import("@nestjs/common").HttpException | (import("./autor.entity").Autor & UpdateAutorDTO)>;
}
