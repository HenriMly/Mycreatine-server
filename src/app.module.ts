import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {
  
}
