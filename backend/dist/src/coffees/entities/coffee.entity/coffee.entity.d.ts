import { Drink } from 'src/common/interfaces/drink.interface/drink.interface';
import { Flavor } from '../flavor.entity/flavor.entity';
export declare class Coffee implements Drink {
    id: number;
    name: string;
    brand: string;
    flavors?: Flavor[];
    createdAt?: Date;
}
