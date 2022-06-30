import { IsNotEmpty } from "class-validator";
import { Item } from "src/graphql";

export class ItemDTO extends Item{
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    categoriesId: [string];

    @IsNotEmpty()
    price: string;
}