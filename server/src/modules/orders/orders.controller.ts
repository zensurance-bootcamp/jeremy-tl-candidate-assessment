import { Body, Controller, Post } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { OrdersService } from './orders.service';
import { PlaceOrderDto } from './dto/place-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly service: OrdersService) {}

  @Post()
  httpPlace(@Body() dto: PlaceOrderDto) {
    return this.service.placeOrder(dto);
  }

  @GrpcMethod('Orders', 'Place')
  placeGrpc(data: PlaceOrderDto) {
    return this.service.placeOrder(data);
  }
}
