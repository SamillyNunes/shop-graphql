import { IsNotEmpty } from "class-validator";
import { Category } from "src/graphql";

export class CategoryDTO extends Category {
    @IsNotEmpty()
    name: string;
}