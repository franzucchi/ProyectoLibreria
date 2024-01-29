
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('autor')
export class Autor{

    @PrimaryColumn({unique:true})
    DNI: number

    @Column()
    nombreAutor: string
    
    @Column()
    apellidoAutor: string

    @Column()
    nacionalidad: string


 

}