import { Module } from '@nestjs/common';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { InventoryRepo } from './inventory.repo';

@Module({
  controllers: [InventoryController],
  providers: [InventoryService, InventoryRepo],
  exports: [InventoryService]
})
export class InventoryModule {}
