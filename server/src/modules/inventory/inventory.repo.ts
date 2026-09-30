import { Injectable } from "@nestjs/common";
import { InjectDataSource } from "@nestjs/typeorm";
import { DataSource } from "typeorm";

@Injectable()
export class InventoryRepo {
  constructor(@InjectDataSource() private readonly ds: DataSource) {}

  async getStock(sku: string): Promise<number> {
    const row = await this.ds.query(
      "SELECT stock FROM products WHERE sku = $1",
      [sku]
    );
    return row[0]?.stock ?? 0;
  }

  async getStocks(skus: string[]): Promise<Record<string, number>> {
    const result: Record<string, number> = {};
    for (const sku of skus) {
      result[sku] = await this.getStock(sku);
    }
    return result;
  }

  async adjust(sku: string, delta: number): Promise<void> {
    await this.ds.query(
      "UPDATE products SET stock = stock + $1 WHERE sku = $2",
      [delta, sku]
    );
  }
}
