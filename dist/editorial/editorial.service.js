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
exports.EditorialService = void 0;
const common_1 = require("@nestjs/common");
const editorial_entity_1 = require("./editorial.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const common_2 = require("@nestjs/common");
let EditorialService = class EditorialService {
    constructor(editorialRepository) {
        this.editorialRepository = editorialRepository;
    }
    async crearEditorial(editorial) {
        const verif = /^\d{10}$/;
        const cuit = editorial.CUIT;
        const cuitString = cuit.toString();
        const busqueda = await this.editorialRepository.findOne({ where: { NombreEditorial: editorial.NombreEditorial } });
        if (busqueda) {
            return new common_2.HttpException('La editorial ya existe', common_2.HttpStatus.CONFLICT);
        }
        if (verif.test(cuitString) == false) {
            return new common_2.HttpException('CUIT erroneo', common_2.HttpStatus.BAD_REQUEST);
        }
        const newEditorial = this.editorialRepository.create(editorial);
        return this.editorialRepository.save(newEditorial);
    }
    getEditoriales() { return this.editorialRepository.find(); }
    async getEditorial(nombre) {
        const busqueda = await this.editorialRepository.findOne({ where: { NombreEditorial: nombre } });
        if (!busqueda) {
            return new common_2.HttpException('Editorial no encontrado en la Bd', common_2.HttpStatus.NOT_FOUND);
        }
        return busqueda;
    }
    async deleteEditorial(nombre) {
        const resultado = await this.editorialRepository.delete({ NombreEditorial: nombre });
        if (resultado.affected == 0) {
            return new common_2.HttpException('Editorial no encontrado en la Bd', common_2.HttpStatus.NOT_FOUND);
        }
        return resultado;
    }
    async updateEditorial(nombre, editorial) {
        const busqueda = await this.editorialRepository.findOne({ where: { NombreEditorial: nombre } });
        if (!busqueda) {
            return new common_2.HttpException('Editorial no encontrado en la BD', common_2.HttpStatus.NOT_FOUND);
        }
        const updateEditorial = Object.assign(busqueda, editorial);
        return this.editorialRepository.save(updateEditorial);
    }
};
exports.EditorialService = EditorialService;
exports.EditorialService = EditorialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(editorial_entity_1.Editorial)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EditorialService);
//# sourceMappingURL=editorial.service.js.map