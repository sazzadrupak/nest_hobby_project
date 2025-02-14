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
exports.CoffeesService = void 0;
const apollo_1 = require("@nestjs/apollo");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const coffee_entity_1 = require("./entities/coffee.entity/coffee.entity");
const flavor_entity_1 = require("./entities/flavor.entity/flavor.entity");
let CoffeesService = class CoffeesService {
    constructor(coffeesRepository, flavorRepository) {
        this.coffeesRepository = coffeesRepository;
        this.flavorRepository = flavorRepository;
    }
    async findAll() {
        return this.coffeesRepository.find();
    }
    async findOne(id) {
        const coffee = await this.coffeesRepository.findOne({ where: { id } });
        if (!coffee) {
            throw new apollo_1.UserInputError(`Coffee #${id} does not exist`);
        }
        return coffee;
    }
    async create(createCoffeeInput) {
        const flavors = await Promise.all(createCoffeeInput.flavors.map((name) => this.preloadFlavorByName(name)));
        const coffee = this.coffeesRepository.create({
            ...createCoffeeInput,
            flavors,
        });
        return this.coffeesRepository.save(coffee);
    }
    async update(id, updateCoffeeInput) {
        const flavors = updateCoffeeInput.flavors &&
            (await Promise.all(updateCoffeeInput.flavors.map((name) => this.preloadFlavorByName(name))));
        const coffee = await this.coffeesRepository.preload({
            id,
            ...updateCoffeeInput,
            flavors,
        });
        if (!coffee) {
            throw new apollo_1.UserInputError(`Coffee #${id} does not exist`);
        }
        return this.coffeesRepository.save(coffee);
    }
    async remove(id) {
        const coffee = await this.findOne(id);
        return this.coffeesRepository.remove(coffee);
    }
    async preloadFlavorByName(name) {
        const existingFlavor = await this.flavorRepository.findOne({
            where: { name },
        });
        if (existingFlavor) {
            return existingFlavor;
        }
        return this.flavorRepository.create({ name });
    }
};
exports.CoffeesService = CoffeesService;
exports.CoffeesService = CoffeesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(coffee_entity_1.Coffee)),
    __param(1, (0, typeorm_1.InjectRepository)(flavor_entity_1.Flavor)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CoffeesService);
//# sourceMappingURL=coffees.service.js.map