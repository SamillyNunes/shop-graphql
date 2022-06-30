
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class NewProduct {
    name: string;
    categoryId: string;
    price: string;
    itemsId: string[];
}

export class NewCategory {
    name: string;
}

export class NewItem {
    name: string;
    categoriesId: string[];
    price: string;
}

export class Product {
    id: string;
    name: string;
    category: Category;
    price: string;
    items: Item[];
}

export class Category {
    id: string;
    name: string;
}

export class Item {
    id: string;
    name: string;
    categories: Category[];
    price: string;
}

export abstract class IQuery {
    abstract products(): Product[] | Promise<Product[]>;

    abstract categories(): Category[] | Promise<Category[]>;

    abstract items(): Item[] | Promise<Item[]>;
}

export abstract class IMutation {
    abstract createCategory(input: NewCategory): Category | Promise<Category>;

    abstract createItem(input: NewItem): Item | Promise<Item>;

    abstract createProduct(input: NewProduct): Product | Promise<Product>;
}

type Nullable<T> = T | null;
