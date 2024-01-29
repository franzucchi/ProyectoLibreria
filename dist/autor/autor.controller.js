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
exports.AutorController = void 0;
const common_1 = require("@nestjs/common");
const autor_service_1 = require("./autor.service");
const crear_autor_dto_1 = require("./dto/crear-autor.dto");
const actualizar_autor_dto_1 = require("./dto/actualizar-autor.dto");
const swagger_1 = require("@nestjs/swagger");
let AutorController = class AutorController {
    constructor(autorService) {
        this.autorService = autorService;
    }
    getAutores() {
        return this.autorService.getAutores();
    }
    getAutor(dni) {
        return this.autorService.getAutor(dni);
    }
    crearAutor(newAutor) {
        return this.autorService.createAutor(newAutor);
    }
    deleteAutor(dni) {
        return this.autorService.deleteAutor(dni);
    }
    updateAutor(dni, autor) {
        return this.autorService.updateAutor(dni, autor);
    }
};
exports.AutorController = AutorController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AutorController.prototype, "getAutores", null);
__decorate([
    (0, common_1.Get)(':DNI'),
    __param(0, (0, common_1.Param)('DNI')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AutorController.prototype, "getAutor", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [crear_autor_dto_1.CrearAutorDTO]),
    __metadata("design:returntype", void 0)
], AutorController.prototype, "crearAutor", null);
__decorate([
    (0, common_1.Delete)(':DNI'),
    __param(0, (0, common_1.Param)('DNI')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AutorController.prototype, "deleteAutor", null);
__decorate([
    (0, common_1.Patch)(':DNI'),
    __param(0, (0, common_1.Param)('DNI')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, actualizar_autor_dto_1.UpdateAutorDTO]),
    __metadata("design:returntype", void 0)
], AutorController.prototype, "updateAutor", null);
exports.AutorController = AutorController = __decorate([
    (0, swagger_1.ApiTags)('autor'),
    (0, common_1.Controller)('autor'),
    __metadata("design:paramtypes", [autor_service_1.AutorService])
], AutorController);
//# sourceMappingURL=autor.controller.js.map