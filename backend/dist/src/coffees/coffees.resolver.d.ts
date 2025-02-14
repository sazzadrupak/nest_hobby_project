import { CoffeesService } from './coffees.service';
import { CreateCoffeeInput } from './dto/create-coffee.input/create-coffee.input';
import { UpdateCoffeeInput } from './dto/update-coffee.input/update-coffee.input';
import { Coffee } from './entities/coffee.entity/coffee.entity';
export declare class CoffeesResolver {
    private readonly coffeesService;
    constructor(coffeesService: CoffeesService);
    findAll(): Promise<Coffee[]>;
    findOne(id: number): Promise<Coffee>;
    create(createCoffeeInput: CreateCoffeeInput): Promise<Coffee>;
    update(id: number, updateCoffeeInput: UpdateCoffeeInput): Promise<Coffee>;
    remove(id: number): Promise<Coffee>;
}
