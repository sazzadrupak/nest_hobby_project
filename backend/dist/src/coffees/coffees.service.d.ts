import { Repository } from 'typeorm';
import { CreateCoffeeInput } from './dto/create-coffee.input/create-coffee.input';
import { UpdateCoffeeInput } from './dto/update-coffee.input/update-coffee.input';
import { Coffee } from './entities/coffee.entity/coffee.entity';
import { Flavor } from './entities/flavor.entity/flavor.entity';
export declare class CoffeesService {
    private readonly coffeesRepository;
    private readonly flavorRepository;
    constructor(coffeesRepository: Repository<Coffee>, flavorRepository: Repository<Flavor>);
    findAll(): Promise<Coffee[]>;
    findOne(id: number): Promise<Coffee>;
    create(createCoffeeInput: CreateCoffeeInput): Promise<Coffee>;
    update(id: number, updateCoffeeInput: UpdateCoffeeInput): Promise<Coffee>;
    remove(id: number): Promise<Coffee>;
    private preloadFlavorByName;
}
