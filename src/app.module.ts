import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { LibroModule } from './libro/libro.module';
import { EditorialModule } from './editorial/editorial.module';
import { AutorModule } from './autor/autor.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type:'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password:'peron3514',
    database: 'libreria',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
    }),
    LibroModule,
    EditorialModule,
    AutorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
