"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Proyecto Libreria')
        .setDescription('LibreriaBD')
        .setVersion('1.0')
        .addTag('libro')
        .addTag('editorial')
        .addTag('autor')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('libreria', app, document, {
        explorer: true,
        swaggerOptions: { filter: true, showRequestDuration: true }
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map