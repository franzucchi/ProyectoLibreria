import { Module } from '@nestjs/common';
import { EditorialController } from './editorial.controller';
import { EditorialService } from './editorial.service';
import { Editorial } from './editorial.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Editorial])],
  controllers: [EditorialController],
  providers: [EditorialService],
  exports:[EditorialService]
})
export class EditorialModule {}
