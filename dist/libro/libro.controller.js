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
exports.LibroController = void 0;
const common_1 = require("@nestjs/common");
const libro_service_1 = require("./libro.service");
const crear_libro_dto_1 = require("./dto/crear-libro.dto");
const actualizar_libro_dto_1 = require("./dto/actualizar-libro.dto");
const editorial_service_1 = require("../editorial/editorial.service");
const swagger_1 = require("@nestjs/swagger");
let LibroController = class LibroController {
    constructor(libroService, editorialService) {
        this.libroService = libroService;
        this.editorialService = editorialService;
    }
    crearLibro(nuevoLibro) {
        return this.libroService.crearLibro(nuevoLibro);
    }
    getLibros() {
        return this.libroService.getLibrosEditorialesAutores();
    }
    getLibroEditorialAutor(titulo) {
        return this.libroService.getLibroEditorialAutor(titulo);
    }
    deleteLibro(titulo) {
        return this.libroService.deleteLibro(titulo);
    }
    updateLibro(titulo, libroactualizado) {
        return this.libroService.updateLibro(titulo, libroactualizado);
    }
};
exports.LibroController = LibroController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [crear_libro_dto_1.CrearLibroDTO]),
    __metadata("design:returntype", void 0)
], LibroController.prototype, "crearLibro", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LibroController.prototype, "getLibros", null);
__decorate([
    (0, common_1.Get)(':Titulo'),
    __param(0, (0, common_1.Param)('Titulo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LibroController.prototype, "getLibroEditorialAutor", null);
__decorate([
    (0, common_1.Delete)(':Titulo'),
    __param(0, (0, common_1.Param)('Titulo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LibroController.prototype, "deleteLibro", null);
__decorate([
    (0, common_1.Patch)(':Titulo'),
    __param(0, (0, common_1.Param)('Titulo')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, actualizar_libro_dto_1.ActualizarLibroDTO]),
    __metadata("design:returntype", void 0)
], LibroController.prototype, "updateLibro", null);
exports.LibroController = LibroController = __decorate([
    (0, swagger_1.ApiTags)('libro'),
    (0, common_1.Controller)('libro'),
    __metadata("design:paramtypes", [libro_service_1.LibroService, editorial_service_1.EditorialService])
], LibroController);
//# sourceMappingURL=libro.controller.js.map