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
import { IsDefined, IsInt, IsString } from 'class-validator';
export default class tipo_documento {
    constructor(data) {
        Object.assign(this, data);
        this._id = 0;
        this.tipdoc_id = 0;
        this.tipdoc_nombre = '';
        this.tipdoc_abreviatura = '';
    }
}
__decorate([
    Expose({ name: '_id' }),
    IsInt(),
    IsDefined({ message: 'El _id es obligatorio' }),
    __metadata("design:type", Number)
], tipo_documento.prototype, "_id", void 0);
__decorate([
    Expose({ name: 'tipdoc_id' }),
    IsInt(),
    IsDefined({ message: 'El tipdoc_id es obligatorio' }),
    __metadata("design:type", Number)
], tipo_documento.prototype, "tipdoc_id", void 0);
__decorate([
    Expose({ name: 'tipdoc_nombre' }),
    IsString(),
    IsDefined({ message: 'El tipdoc_nombre es obligatorio' }),
    __metadata("design:type", String)
], tipo_documento.prototype, "tipdoc_nombre", void 0);
__decorate([
    Expose({ name: 'tipdoc_abreviatura' }),
    IsString(),
    IsDefined({ message: 'El tipdoc_abreviatura es obligatorio' }),
    __metadata("design:type", String)
], tipo_documento.prototype, "tipdoc_abreviatura", void 0);
