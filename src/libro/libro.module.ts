import { Module } from '@nestjs/common';
import { LibroController } from './libro.controller';
import { LibroService } from './libro.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from './libro.entity';
import { EditorialModule } from 'src/editorial/editorial.module';
import { AutorModule } from 'src/autor/autor.module';
import { Editorial } from 'src/editorial/editorial.entity';
import { Autor } from 'src/autor/autor.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Libro,Editorial,Autor]),EditorialModule,AutorModule],
  controllers: [LibroController],
  providers: [LibroService]
})
export class LibroModule {}
