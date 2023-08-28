var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined, IsInt, IsNumber, IsString } from 'class-validator';
export default class acudiente {
    constructor(data) {
        Object.assign(this, data);
        this._id = 0;
        this.acu_codigo = 0;
        this.acu_nombreCompleto = '';
        this.acu_telefono = 0;
        this.acu_direccion = '';
    }
}
__decorate([
    Expose({ name: '_id' }),
    IsInt(),
    IsDefined({ message: 'El _id es obligatorio' }),
    __metadata("design:type", Number)
], acudiente.prototype, "_id", void 0);
__decorate([
    Expose({ name: 'acu_codigo' }),
    IsInt(),
    IsDefined({ message: 'El acu_codigo es obligatorio' }),
    __metadata("design:type", Number)
], acudiente.prototype, "acu_codigo", void 0);
__decorate([
    Expose({ name: 'acu_nombreCompleto' }),
    IsString(),
    IsDefined({ message: 'El acu_nombreCompleto es obligatorio' }),
    __metadata("design:type", String)
], acudiente.prototype, "acu_nombreCompleto", void 0);
__decorate([
    Expose({ name: 'acu_telefono' }),
    IsNumber(),
    IsDefined({ message: 'El acu_telefono es obligatorio' }),
    __metadata("design:type", Number)
], acudiente.prototype, "acu_telefono", void 0);
__decorate([
    Expose({ name: 'acu_direccion' }),
    IsString(),
    IsDefined({ message: 'El acu_direccion es obligatorio' }),
    __metadata("design:type", String)
], acudiente.prototype, "acu_direccion", void 0);
