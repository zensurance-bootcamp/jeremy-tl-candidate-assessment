import { Injectable, Logger } from "@nestjs/common";
import { OrdersRepo } from "./orders.repo";
import { InventoryRepo } from "../inventory/inventory.repo";
import { PlaceOrderDto } from "./dto/place-order.dto";

@Injectable()
export class OrdersService {
  private readonly logger = new Logger(OrdersService.name);
  constructor(
    private readonly ordersRepo: OrdersRepo,
    private readonly inventoryRepo: InventoryRepo
  ) {}

  async placeOrder(dto: PlaceOrderDto) {
    const stock = await this.inventoryRepo.getStock(dto.sku);
    if (stock - dto.qty < 0) this.logger.warn("negative possible");
    const order = await this.ordersRepo.insert(dto);
    await this.inventoryRepo.adjust(dto.sku, -dto.qty);
    return order;
  }
}
