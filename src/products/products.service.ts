import { Category, Item, Product } from "src/graphql";
import { CategoryDTO } from "./dto/category.dto";
import { ItemDTO } from "./dto/item.dto";
import { ProductDTO } from "./dto/product.dto";

export class ProductsService{
    private readonly products: Product[] = [];
    private readonly items: Item[] = [];
    private readonly categories: Category[] = [];

    findAllProducts() : Product[] {
        return this.products;
    }

    findAllItems() : Item[] {
        return this.items;
    }

    findAllCategories() : Category[] {
        return this.categories;
    }

    createProduct(productDTO: ProductDTO): Product {
        const productId: number = this.products.length;
        const product: Product = new Product();

        product.id = productId.toString();
        product.name = productDTO.name;
        product.price = productDTO.price;
        
        var itemsList = []
        for(var itemStr of productDTO.itemsId){
            const item: Item = new Item();

            item.id = itemStr.toString();
            item.name = "Item "+item.id
            item.price = ""
            
            itemsList.push(item)
        }

        product.items = itemsList;

        return product;
    }
    
    createCategory(categoryDTO: CategoryDTO): Category {
        const categoryId: number = this.categories.length;
        const category: Category = new Category();

        category.id = categoryId.toString();
        category.name = categoryDTO.name;

        return category;
    }

    createItem(itemDTO: ItemDTO): Item {


        const itemId = this.items.length;
        const item: Item = new Item();

        item.id = itemId.toString();
        item.name = itemDTO.name;
        item.price = itemDTO.price;
        
        var categoriesList = []
        for(var categoryId of itemDTO.categoriesId){
            const category: Category = new Category();

            category.id = categoryId;
            category.name = "Category "+categoryId;
            
            categoriesList.push(category);
        }

        item.categories = categoriesList;

        return item;
    }
}