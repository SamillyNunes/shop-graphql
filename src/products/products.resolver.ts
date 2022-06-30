import { Args, Mutation, Query } from "@nestjs/graphql";
import { Category, Item, Product } from "src/graphql";
import { CategoryDTO } from "./dto/category.dto";
import { ItemDTO } from "./dto/item.dto";
import { ProductDTO } from "./dto/product.dto";
import { ProductsService } from "./products.service";

export class ProductsResolver{
    constructor(private readonly productsService: ProductsService) {}

    @Query()
    async products(): Promise<Product[]> {
        return this.productsService.findAllProducts();
    }

    
    @Mutation('createProduct')
    async createProducts(@Args('input') args: ProductDTO): Promise<Product> {
        return await this.productsService.createProduct(args);
    }

    @Query()
    async categories(): Promise<Category[]> {
        return this.productsService.findAllCategories();
    }

    
    @Mutation('createCategory')
    async createCategory(@Args('input') args: CategoryDTO): Promise<Category> {
        return await this.productsService.createCategory(args);
    }
    
    @Query()
    async items(): Promise<Item[]> {
        return this.productsService.findAllItems();
    }

    
    @Mutation('createItem')
    async createItem(@Args('input') args: ItemDTO): Promise<Item> {
        return await this.productsService.createItem(args);
    }
}