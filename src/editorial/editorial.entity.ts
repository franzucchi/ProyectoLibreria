import { Libro } from "src/libro/libro.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity('editorial')
export class Editorial{

    @PrimaryColumn({unique:false})
    NombreEditorial: string

    @Column({unique:false})
    Direccion: string
    
    @Column({unique:false})
    CUIT: number



} 