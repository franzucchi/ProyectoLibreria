import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Libro } from './libro.entity';
import { Repository,In } from 'typeorm';
import { CrearLibroDTO } from './dto/crear-libro.dto';

import { HttpException,HttpStatus } from '@nestjs/common';
import { ActualizarLibroDTO } from './dto/actualizar-libro.dto';
import { Editorial } from 'src/editorial/editorial.entity';
import { Autor } from 'src/autor/autor.entity';

@Injectable()
export class LibroService {
  
    constructor(@InjectRepository(Libro) private libroRepository: Repository<Libro>,
                @InjectRepository(Editorial) private editorialRepository: Repository<Editorial>,
                @InjectRepository(Autor) private autorRepository: Repository<Autor>){

    }
    
    async crearLibro(libro:CrearLibroDTO){

        const editorial = await this.editorialRepository.findOne({where:{NombreEditorial:libro.Editorial}})
        if(!editorial){ return new HttpException('Editorial no encontrada en la Bd, por favor crea uno',HttpStatus.NOT_FOUND) }
          
        const autor = await this.autorRepository.findOne({where:{nombreAutor: libro.NombreAutor}})
        if(!autor){ return new HttpException('Autor no encontrado en la Bd, por favor crea uno',HttpStatus.NOT_FOUND) }

        const LibroEncontrado = await this.libroRepository.findOne({where: {Titulo: libro.Titulo}})
        if(LibroEncontrado){ return new HttpException('El Libro ya existe',HttpStatus.CONFLICT) }

       // const fecha = new Date(libro.FechaLanzamiento)
       // fecha.toISOString() 
       
        const lib = this.libroRepository.create(libro)
        return this.libroRepository.save(lib)
        }

        async getLibrosEditorialesAutores(){
             const libros = await this.libroRepository.find()
             const editoriales = await this.editorialRepository.find()
             const autores = await this.autorRepository.find()
             const obj = {libros,editoriales,autores}
             return obj
             
           }

        async getLibroEditorialAutor(nombre: string){
        const nombreLibro = await this.libroRepository.findOne({where:{Titulo: nombre}})
            if(!nombreLibro){return new HttpException('Libro no encontrado en la BD',HttpStatus.NOT_FOUND)}
            const editorial = await this.editorialRepository.findOne({where:{NombreEditorial:nombreLibro.Editorial}})
            const autor = await this.autorRepository.findOne({where:{nombreAutor: nombreLibro.NombreAutor}})
            
             return {nombreLibro,autor,editorial};
        }
        
        async deleteLibro(nombre: string){
            const resultado = await this.libroRepository.delete({Titulo: nombre})
            if(resultado.affected == 0){
              return new HttpException('Libro no encontrado en la BD',HttpStatus.NOT_FOUND)
            }
            return resultado
          }

          async updateLibro(nombre: string,libro:ActualizarLibroDTO ){
            const resultado = await this.libroRepository.findOne({where:{Titulo:nombre}})
             if(!resultado){
               return new HttpException('Libro no encontrado en la Bd',HttpStatus.NOT_FOUND)
             }
            const updateLibro = Object.assign(resultado,libro)
            return this.libroRepository.save(updateLibro)
            
           }



}
