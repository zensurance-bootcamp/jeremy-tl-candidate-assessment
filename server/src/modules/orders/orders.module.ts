import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OrdersRepo } from './orders.repo';
import { InventoryRepo } from '../inventory/inventory.repo';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepo, InventoryRepo],
})
export class OrdersModule {}
