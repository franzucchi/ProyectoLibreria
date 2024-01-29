import { Injectable } from '@nestjs/common';
import { Editorial } from './editorial.entity';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrearEditorialDTO } from './dto/crear-editorial.dto';
import { HttpException,HttpStatus } from '@nestjs/common';
import { updateEditorialDTO } from './dto/actualizar-editorial.dto';

@Injectable()
export class EditorialService {
 
    constructor(@InjectRepository(Editorial) private editorialRepository: Repository<Editorial>){

    }

    async crearEditorial(editorial:CrearEditorialDTO){
      const verif = /^\d{10}$/
      const cuit = editorial.CUIT
      const cuitString = cuit.toString()

      const busqueda = await this.editorialRepository.findOne({where: {NombreEditorial: editorial.NombreEditorial}})
       if(busqueda){return new HttpException('La editorial ya existe',HttpStatus.CONFLICT)}

      if(verif.test(cuitString) == false){return new HttpException('CUIT erroneo',HttpStatus.BAD_REQUEST)}

       const newEditorial = this.editorialRepository.create(editorial)
       return this.editorialRepository.save(newEditorial)
      }


    getEditoriales(){return this.editorialRepository.find()}

    async getEditorial(nombre: string){
     const busqueda = await this.editorialRepository.findOne({where:{NombreEditorial:nombre}})
      if(!busqueda){
        return new HttpException('Editorial no encontrado en la Bd',HttpStatus.NOT_FOUND)
      }
      return busqueda;
    }
    
    async deleteEditorial(nombre: string){
      const resultado = await this.editorialRepository.delete({NombreEditorial:nombre})
      if(resultado.affected == 0){
        return new HttpException('Editorial no encontrado en la Bd',HttpStatus.NOT_FOUND)
      }
      return resultado
    }

    async updateEditorial(nombre:string,editorial:updateEditorialDTO ){
     const busqueda = await this.editorialRepository.findOne({where:{NombreEditorial:nombre}})
      if(!busqueda){return new HttpException('Editorial no encontrado en la BD',HttpStatus.NOT_FOUND)}
     const updateEditorial = Object.assign(busqueda, editorial)
     return this.editorialRepository.save(updateEditorial)

     
  
     
    }

}
