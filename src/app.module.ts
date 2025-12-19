import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ProductsController, OrderController],
  providers: [AppService, ProductsService, OrderService],
})
export class AppModule {}
