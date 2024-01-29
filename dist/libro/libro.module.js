"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibroModule = void 0;
const common_1 = require("@nestjs/common");
const libro_controller_1 = require("./libro.controller");
const libro_service_1 = require("./libro.service");
const typeorm_1 = require("@nestjs/typeorm");
const libro_entity_1 = require("./libro.entity");
const editorial_module_1 = require("../editorial/editorial.module");
const autor_module_1 = require("../autor/autor.module");
const editorial_entity_1 = require("../editorial/editorial.entity");
const autor_entity_1 = require("../autor/autor.entity");
let LibroModule = class LibroModule {
};
exports.LibroModule = LibroModule;
exports.LibroModule = LibroModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([libro_entity_1.Libro, editorial_entity_1.Editorial, autor_entity_1.Autor]), editorial_module_1.EditorialModule, autor_module_1.AutorModule],
        controllers: [libro_controller_1.LibroController],
        providers: [libro_service_1.LibroService]
    })
], LibroModule);
//# sourceMappingURL=libro.module.js.map