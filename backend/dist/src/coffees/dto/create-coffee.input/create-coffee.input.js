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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCoffeeInput = void 0;
const eager_import_0 = require("../../../common/enums/coffee-type.enum");
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreateCoffeeInput = class CreateCoffeeInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { brand: { type: () => String }, flavors: { type: () => [String] }, type: { type: () => require("../../../common/enums/coffee-type.enum").CoffeeType } };
    }
};
exports.CreateCoffeeInput = CreateCoffeeInput;
__decorate([
    (0, class_validator_1.MinLength)(3),
    (0, graphql_1.Field)(() => String, { description: 'A new coffee name' }),
    __metadata("design:type", String)
], CreateCoffeeInput.prototype, "name", void 0);
exports.CreateCoffeeInput = CreateCoffeeInput = __decorate([
    (0, graphql_1.InputType)({ description: 'Create coffee input object type.' })
], CreateCoffeeInput);
//# sourceMappingURL=create-coffee.input.js.map