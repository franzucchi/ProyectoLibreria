import { Module } from '@nestjs/common';
import { AutorService } from './autor.service';
import { AutorController } from './autor.controller';
import { Autor } from './autor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Autor])],
  providers: [AutorService],
  controllers: [AutorController],
  exports: [AutorService]
})
export class AutorModule {}
