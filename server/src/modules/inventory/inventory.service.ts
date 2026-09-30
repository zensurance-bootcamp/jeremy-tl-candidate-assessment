import { Injectable, Logger } from "@nestjs/common";
import { InventoryRepo } from "./inventory.repo";

@Injectable()
export class InventoryService {
  private readonly logger = new Logger(InventoryService.name);
  constructor(private readonly repo: InventoryRepo) {}

  async getStock(skus: string[]) {
    return this.repo.getStocks(skus);
  }

  async adjust(input: { sku: string; quantity: number }) {
    await this.repo.adjust(input.sku, input.quantity);
    return { ok: true };
  }
}
