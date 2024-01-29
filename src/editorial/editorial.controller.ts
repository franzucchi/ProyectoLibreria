import { Body, Controller, Post,Get, Param, Query, Delete, Patch } from '@nestjs/common';
import { EditorialService } from './editorial.service';
import { CrearEditorialDTO } from './dto/crear-editorial.dto';
import { updateEditorialDTO } from './dto/actualizar-editorial.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('editorial')
@Controller('editorial')
export class EditorialController {
   
    constructor(private editorialService: EditorialService){

    }
    
    @Get()
    getEditoriales(){
     return this.editorialService.getEditoriales();
    }

    @Get(':NombreEditorial')
    getEditorial(@Param('NombreEditorial')nombre: string){
     return this.editorialService.getEditorial(nombre);
    }

    @Post()
    crearEditorial(@Body()editorial:CrearEditorialDTO){
      return this.editorialService.crearEditorial(editorial)
    }
    
    @Delete(':NombreEditorial')
    deleteEditorial(@Param('NombreEditorial')nombre:string){
      return this.editorialService.deleteEditorial(nombre)
    }
    
    @Patch(':NombreEditorial')
    updateEditorial(@Param('NombreEditorial')nombre:string, @Body() editorialact: updateEditorialDTO){
     return this.editorialService.updateEditorial(nombre, editorialact)
    }





}
