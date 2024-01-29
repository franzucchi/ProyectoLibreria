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
exports.AutorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const autor_entity_1 = require("./autor.entity");
const typeorm_2 = require("typeorm");
const common_2 = require("@nestjs/common");
let AutorService = class AutorService {
    constructor(autorRepository) {
        this.autorRepository = autorRepository;
    }
    async createAutor(autor) {
        const verif = /^\d{8}$/;
        const dni = autor.DNI;
        const dniString = dni.toString();
        const busqueda = await this.autorRepository.findOne({ where: { nombreAutor: autor.nombreAutor } });
        if (busqueda) {
            return new common_2.HttpException('El autor ya existe', common_2.HttpStatus.CONFLICT);
        }
        if (verif.test(dniString) == false) {
            return new common_2.HttpException('DNI erroneo', common_2.HttpStatus.BAD_REQUEST);
        }
        const newAutor = this.autorRepository.create(autor);
        return this.autorRepository.save(newAutor);
    }
    getAutores() { return this.autorRepository.find(); }
    async getAutor(dni) {
        const busqueda = await this.autorRepository.findOne({ where: { DNI: dni } });
        if (!busqueda) {
            return new common_2.HttpException('Autor no encontrado en la Bd', common_2.HttpStatus.NOT_FOUND);
        }
        return busqueda;
    }
    async deleteAutor(dni) {
        const resultado = await this.autorRepository.delete({ DNI: dni });
        if (resultado.affected == 0) {
            return new common_2.HttpException('Autor no encontrado en la Bd', common_2.HttpStatus.NOT_FOUND);
        }
        return resultado;
    }
    async updateAutor(dni, autor) {
        const busqueda = await this.autorRepository.findOne({ where: { DNI: dni } });
        if (!busqueda) {
            return new common_2.HttpException('Autor no encontrado en la Bd', common_2.HttpStatus.NOT_FOUND);
        }
        const updateAutor = Object.assign(busqueda, autor);
        return this.autorRepository.save(updateAutor);
    }
};
exports.AutorService = AutorService;
exports.AutorService = AutorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(autor_entity_1.Autor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AutorService);
//# sourceMappingURL=autor.service.js.map