import { Injectable } from '@nestjs/common';
import { CreateOrderDto, Order } from './order.interface';

@Injectable()
export class OrderService {
  private baseUrl = 'https://strapi-production-2ff5.up.railway.app';

  createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    // TODO : Modifier l'endpoint en fonction du projet
    // Créatine : /api/creatine-orders
    // Poké : /api/poke-orders
    // Cookie : /api/cookie-orders
    return fetch(`${this.baseUrl}/api/creatine-orders`, {
      method: 'POST',
      body: JSON.stringify(createOrderDto),
    }).then((res) => res.json());
  }

  getOrders(): Promise<Order[]> {
    return fetch(`${this.baseUrl}/api/orders`).then((res) => res.json());
  }
}
