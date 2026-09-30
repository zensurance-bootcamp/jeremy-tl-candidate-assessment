import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { PlaceOrderDto } from './dto/place-order.dto';

@Injectable()
export class OrdersRepo {
  constructor(@InjectDataSource() private readonly ds: DataSource) {}

  async insert(dto: PlaceOrderDto) {
    const rows = await this.ds.query(
      'INSERT INTO orders (sku, qty) VALUES ($1, $2) RETURNING id, sku, qty',
      [dto.sku, dto.qty]
    );
    return rows[0];
  }
}
