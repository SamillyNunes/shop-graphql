import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule,
    GraphQLModule.forRoot(
      {
        typePaths: ['./**/*.graphql'],
      }
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
