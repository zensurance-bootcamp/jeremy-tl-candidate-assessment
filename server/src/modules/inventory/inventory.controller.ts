import { Controller, Get, Query } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { InventoryService } from "./inventory.service";

@Controller("inventory")
export class InventoryController {
  constructor(private readonly service: InventoryService) {}

  @Get("stock")
  async httpGetStock(@Query("skus") skusCsv: string) {
    const skus = (skusCsv || "").split(",").filter(Boolean);
    return this.service.getStock(skus);
  }

  @GrpcMethod("Inventory", "AdjustStock")
  async adjustStockGrpc(data: { sku: string; delta: number }) {
    return this.service.adjust({ sku: data.sku, quantity: data.delta });
  }

  @GrpcMethod("Inventory", "GetStock")
  async getStockGrpc(data: { skus: string[] }) {
    const itemsMap = await this.service.getStock(data.skus ?? []);
    return {
      items: Object.entries(itemsMap).map(([sku, stock]) => ({ sku, stock })),
    };
  }
}
