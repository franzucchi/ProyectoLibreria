import { Column, Entity, PrimaryColumn } from "typeorm";



@Entity({name:'libro'})
export class Libro{

    @PrimaryColumn({unique:false})
    Titulo: string

    @Column({unique:false})
    NombreAutor: string
    
    @Column({unique:false})
    ApellidoAutor: string

    @Column({unique:false})
    Editorial: string
    
    @Column({unique:false})
    CategoriaLiteraria: string

    @Column({unique:false})
    Precio: number

    @Column({type:'date'})
    FechaLanzamiento: Date

    @Column({unique:false})
    Descripcion: string

 


}