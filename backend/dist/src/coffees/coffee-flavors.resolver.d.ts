import { Repository } from 'typeorm';
import { Coffee } from './entities/coffee.entity/coffee.entity';
import { Flavor } from './entities/flavor.entity/flavor.entity';
export declare class CoffeeFlavorsResolver {
    private readonly flavorsRepository;
    constructor(flavorsRepository: Repository<Flavor>);
    getFlavorsOfCoffee(coffee: Coffee): Promise<Flavor[]>;
}
