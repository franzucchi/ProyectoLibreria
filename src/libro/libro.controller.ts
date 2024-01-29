import { Body, Controller, Post,Get, Param, Query, Delete, Patch } from '@nestjs/common';
import { LibroService } from './libro.service';
import { CrearLibroDTO } from './dto/crear-libro.dto';
import { ActualizarLibroDTO } from './dto/actualizar-libro.dto';
import { EditorialService } from 'src/editorial/editorial.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('libro')
@Controller('libro')
export class LibroController {

    constructor(private libroService: LibroService,private editorialService: EditorialService){

    }

    @Post()
    crearLibro(@Body()nuevoLibro:CrearLibroDTO){
      return this.libroService.crearLibro(nuevoLibro)
    }

    @Get()
    getLibros(){
     return this.libroService.getLibrosEditorialesAutores()
    }
    
    @Get(':Titulo')
    getLibroEditorialAutor(@Param('Titulo')titulo: string){
     return this.libroService.getLibroEditorialAutor(titulo);
    }

    @Delete(':Titulo')
    deleteLibro(@Param('Titulo')titulo:string){
      return this.libroService.deleteLibro(titulo)
    }

    @Patch(':Titulo')
    updateLibro(@Param('Titulo')titulo:string, @Body() libroactualizado: ActualizarLibroDTO){
     return this.libroService.updateLibro(titulo,libroactualizado)
    }


    




}
