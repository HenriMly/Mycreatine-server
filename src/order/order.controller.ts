import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { type CreateOrderDto, Order } from './order.interface';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getOrders(): Promise<Order[]> {
    return this.orderService.getOrders();
  }

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.orderService.createOrder(createOrderDto);
  }
}
