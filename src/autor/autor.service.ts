import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Autor } from './autor.entity';
import { Repository } from 'typeorm';
import { HttpException,HttpStatus } from '@nestjs/common';
import { CrearAutorDTO } from './dto/crear-autor.dto';
import { UpdateAutorDTO } from './dto/actualizar-autor.dto';

@Injectable()
export class AutorService {

    constructor(@InjectRepository(Autor) private autorRepository: Repository<Autor>){}

    async createAutor(autor:CrearAutorDTO){       
      const verif = /^\d{8}$/
      const dni = autor.DNI
      const dniString = dni.toString()

      const busqueda = await this.autorRepository.findOne({where: {nombreAutor: autor.nombreAutor}})
       if(busqueda){return new HttpException('El autor ya existe',HttpStatus.CONFLICT)}
       
       if(verif.test(dniString) == false){return new HttpException('DNI erroneo',HttpStatus.BAD_REQUEST)}

       const newAutor = this.autorRepository.create(autor)
       return this.autorRepository.save(newAutor)
      }


    getAutores(){return this.autorRepository.find()}


    async getAutor(dni: number){

     const busqueda = await this.autorRepository.findOne({where:{DNI:dni}})
      if(!busqueda){return new HttpException('Autor no encontrado en la Bd',HttpStatus.NOT_FOUND)}
      return busqueda;
    }
    
    async deleteAutor(dni: number){
      const resultado = await this.autorRepository.delete({DNI:dni})
      if(resultado.affected == 0){return new HttpException('Autor no encontrado en la Bd',HttpStatus.NOT_FOUND)}
      return resultado
    }

    async updateAutor(dni: number,autor:UpdateAutorDTO ){
     const busqueda = await this.autorRepository.findOne({where:{DNI:dni}})
      if(!busqueda){return new HttpException('Autor no encontrado en la Bd',HttpStatus.NOT_FOUND)}
     const updateAutor = Object.assign(busqueda,autor)
     return this.autorRepository.save(updateAutor)
    }



}



