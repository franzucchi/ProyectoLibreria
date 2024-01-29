import { Editorial } from './editorial.entity';
import { Repository } from 'typeorm';
import { CrearEditorialDTO } from './dto/crear-editorial.dto';
import { HttpException } from '@nestjs/common';
import { updateEditorialDTO } from './dto/actualizar-editorial.dto';
export declare class EditorialService {
    private editorialRepository;
    constructor(editorialRepository: Repository<Editorial>);
    crearEditorial(editorial: CrearEditorialDTO): Promise<Editorial | HttpException>;
    getEditoriales(): Promise<Editorial[]>;
    getEditorial(nombre: string): Promise<Editorial | HttpException>;
    deleteEditorial(nombre: string): Promise<HttpException | import("typeorm").DeleteResult>;
    updateEditorial(nombre: string, editorial: updateEditorialDTO): Promise<HttpException | (Editorial & updateEditorialDTO)>;
}
