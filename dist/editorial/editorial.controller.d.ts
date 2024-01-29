import { EditorialService } from './editorial.service';
import { CrearEditorialDTO } from './dto/crear-editorial.dto';
import { updateEditorialDTO } from './dto/actualizar-editorial.dto';
export declare class EditorialController {
    private editorialService;
    constructor(editorialService: EditorialService);
    getEditoriales(): Promise<import("./editorial.entity").Editorial[]>;
    getEditorial(nombre: string): Promise<import("./editorial.entity").Editorial | import("@nestjs/common").HttpException>;
    crearEditorial(editorial: CrearEditorialDTO): Promise<import("./editorial.entity").Editorial | import("@nestjs/common").HttpException>;
    deleteEditorial(nombre: string): Promise<import("@nestjs/common").HttpException | import("typeorm").DeleteResult>;
    updateEditorial(nombre: string, editorialact: updateEditorialDTO): Promise<import("@nestjs/common").HttpException | (import("./editorial.entity").Editorial & updateEditorialDTO)>;
}
