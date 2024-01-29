"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibroService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const libro_entity_1 = require("./libro.entity");
const typeorm_2 = require("typeorm");
const common_2 = require("@nestjs/common");
const editorial_entity_1 = require("../editorial/editorial.entity");
const autor_entity_1 = require("../autor/autor.entity");
let LibroService = class LibroService {
    constructor(libroRepository, editorialRepository, autorRepository) {
        this.libroRepository = libroRepository;
        this.editorialRepository = editorialRepository;
        this.autorRepository = autorRepository;
    }
    async crearLibro(libro) {
        const editorial = await this.editorialRepository.findOne({ where: { NombreEditorial: libro.Editorial } });
        if (!editorial) {
            return new common_2.HttpException('Editorial no encontrada en la Bd, por favor crea uno', common_2.HttpStatus.NOT_FOUND);
        }
        const autor = await this.autorRepository.findOne({ where: { nombreAutor: libro.NombreAutor } });
        if (!autor) {
            return new common_2.HttpException('Autor no encontrado en la Bd, por favor crea uno', common_2.HttpStatus.NOT_FOUND);
        }
        const LibroEncontrado = await this.libroRepository.findOne({ where: { Titulo: libro.Titulo } });
        if (LibroEncontrado) {
            return new common_2.HttpException('El Libro ya existe', common_2.HttpStatus.CONFLICT);
        }
        const lib = this.libroRepository.create(libro);
        return this.libroRepository.save(lib);
    }
    async getLibrosEditorialesAutores() {
        const libros = await this.libroRepository.find();
        const editoriales = await this.editorialRepository.find();
        const autores = await this.autorRepository.find();
        const obj = { libros, editoriales, autores };
        return obj;
    }
    async getLibroEditorialAutor(nombre) {
        const nombreLibro = await this.libroRepository.findOne({ where: { Titulo: nombre } });
        if (!nombreLibro) {
            return new common_2.HttpException('Libro no encontrado en la BD', common_2.HttpStatus.NOT_FOUND);
        }
        const editorial = await this.editorialRepository.findOne({ where: { NombreEditorial: nombreLibro.Editorial } });
        const autor = await this.autorRepository.findOne({ where: { nombreAutor: nombreLibro.NombreAutor } });
        return { nombreLibro, autor, editorial };
    }
    async deleteLibro(nombre) {
        const resultado = await this.libroRepository.delete({ Titulo: nombre });
        if (resultado.affected == 0) {
            return new common_2.HttpException('Libro no encontrado en la BD', common_2.HttpStatus.NOT_FOUND);
        }
        return resultado;
    }
    async updateLibro(nombre, libro) {
        const resultado = await this.libroRepository.findOne({ where: { Titulo: nombre } });
        if (!resultado) {
            return new common_2.HttpException('Libro no encontrado en la Bd', common_2.HttpStatus.NOT_FOUND);
        }
        const updateLibro = Object.assign(resultado, libro);
        return this.libroRepository.save(updateLibro);
    }
};
exports.LibroService = LibroService;
exports.LibroService = LibroService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(libro_entity_1.Libro)),
    __param(1, (0, typeorm_1.InjectRepository)(editorial_entity_1.Editorial)),
    __param(2, (0, typeorm_1.InjectRepository)(autor_entity_1.Autor)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], LibroService);
//# sourceMappingURL=libro.service.js.map