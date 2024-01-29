import { Body, Controller, Post,Get, Param, Query, Delete, Patch } from '@nestjs/common';
import { AutorService } from './autor.service';
import { CrearAutorDTO } from './dto/crear-autor.dto';
import { UpdateAutorDTO } from './dto/actualizar-autor.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('autor')
@Controller('autor')
export class AutorController {

    constructor(private autorService: AutorService){

    }
    
    @Get()
    getAutores(){
     return this.autorService.getAutores();
    }

    @Get(':DNI')
    getAutor(@Param('DNI')dni: number){
     return this.autorService.getAutor(dni);
    }

    @Post()
    crearAutor(@Body()newAutor:CrearAutorDTO){
      return this.autorService.createAutor(newAutor)
    }
    
    @Delete(':DNI')
    deleteAutor(@Param('DNI')dni:number){
      return this.autorService.deleteAutor(dni)
    }
    
    @Patch(':DNI')
    updateAutor(@Param('DNI')dni:number, @Body() autor: UpdateAutorDTO){
     return this.autorService.updateAutor(dni,autor)
    }



}
