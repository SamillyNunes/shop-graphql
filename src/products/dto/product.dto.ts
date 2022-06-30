import { IsNotEmpty } from "class-validator";
import { Product } from "src/graphql";

export class ProductDTO extends Product {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    categoryId: string;

    @IsNotEmpty()
    price: string;

    @IsNotEmpty()
    itemsId: [string];
}