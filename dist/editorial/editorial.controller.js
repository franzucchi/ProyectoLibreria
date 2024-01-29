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
exports.EditorialController = void 0;
const common_1 = require("@nestjs/common");
const editorial_service_1 = require("./editorial.service");
const crear_editorial_dto_1 = require("./dto/crear-editorial.dto");
const actualizar_editorial_dto_1 = require("./dto/actualizar-editorial.dto");
const swagger_1 = require("@nestjs/swagger");
let EditorialController = class EditorialController {
    constructor(editorialService) {
        this.editorialService = editorialService;
    }
    getEditoriales() {
        return this.editorialService.getEditoriales();
    }
    getEditorial(nombre) {
        return this.editorialService.getEditorial(nombre);
    }
    crearEditorial(editorial) {
        return this.editorialService.crearEditorial(editorial);
    }
    deleteEditorial(nombre) {
        return this.editorialService.deleteEditorial(nombre);
    }
    updateEditorial(nombre, editorialact) {
        return this.editorialService.updateEditorial(nombre, editorialact);
    }
};
exports.EditorialController = EditorialController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EditorialController.prototype, "getEditoriales", null);
__decorate([
    (0, common_1.Get)(':NombreEditorial'),
    __param(0, (0, common_1.Param)('NombreEditorial')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EditorialController.prototype, "getEditorial", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [crear_editorial_dto_1.CrearEditorialDTO]),
    __metadata("design:returntype", void 0)
], EditorialController.prototype, "crearEditorial", null);
__decorate([
    (0, common_1.Delete)(':NombreEditorial'),
    __param(0, (0, common_1.Param)('NombreEditorial')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EditorialController.prototype, "deleteEditorial", null);
__decorate([
    (0, common_1.Patch)(':NombreEditorial'),
    __param(0, (0, common_1.Param)('NombreEditorial')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, actualizar_editorial_dto_1.updateEditorialDTO]),
    __metadata("design:returntype", void 0)
], EditorialController.prototype, "updateEditorial", null);
exports.EditorialController = EditorialController = __decorate([
    (0, swagger_1.ApiTags)('editorial'),
    (0, common_1.Controller)('editorial'),
    __metadata("design:paramtypes", [editorial_service_1.EditorialService])
], EditorialController);
//# sourceMappingURL=editorial.controller.js.map