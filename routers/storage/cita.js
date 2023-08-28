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
export default class cita {
    constructor(data) {
        Object.assign(this, data);
        this._id = 0;
        this.cit_codigo = 0;
        this.cit_fecha = '';
        this.cit_estadoCita = 0;
        this.cit_medico = 0;
        this.cit_datosUsuario = 0;
    }
}
__decorate([
    Expose({ name: '_id' }),
    IsInt(),
    IsDefined({ message: 'El _id es obligatorio' }),
    __metadata("design:type", Number)
], cita.prototype, "_id", void 0);
__decorate([
    Expose({ name: 'cit_codigo' }),
    IsInt(),
    IsDefined({ message: 'El cit_codigo es obligatorio' }),
    __metadata("design:type", Number)
], cita.prototype, "cit_codigo", void 0);
__decorate([
    Expose({ name: 'cit_fecha' }),
    IsString(),
    IsDefined({ message: 'El cit_fecha es obligatorio' }),
    __metadata("design:type", String)
], cita.prototype, "cit_fecha", void 0);
__decorate([
    Expose({ name: 'cit_estadoCita' }),
    IsNumber(),
    IsDefined({ message: 'cit_estadoCita acu_telefono es obligatorio' }),
    __metadata("design:type", Number)
], cita.prototype, "cit_estadoCita", void 0);
__decorate([
    Expose({ name: 'cit_medico' }),
    IsNumber(),
    IsDefined({ message: 'El cit_medico es obligatorio' }),
    __metadata("design:type", Number)
], cita.prototype, "cit_medico", void 0);
__decorate([
    Expose({ name: 'cit_datosUsuario' }),
    IsNumber(),
    IsDefined({ message: 'El cit_datosUsuario es obligatorio' }),
    __metadata("design:type", Number)
], cita.prototype, "cit_datosUsuario", void 0);
