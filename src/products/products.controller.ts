import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('creatine')
  async getCreatine() {
    return this.productsService.getProducts();
  }

  @Get('creatine/:id')
  async getCreatineById(@Param('id') id: string) {
    return this.productsService.getProduct(id);
  }
}
