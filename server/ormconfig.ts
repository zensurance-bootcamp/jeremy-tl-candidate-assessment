import { DataSource } from "typeorm";
import { Product } from "./src/entities/product.entity";
import { Order } from "./src/entities/order.entity";

export default new DataSource({
  type: "postgres",
  url:
    process.env.DATABASE_URL ||
    "postgres://postgres:postgres@localhost:5432/appdb",
  entities: [Product, Order],
  synchronize: false, // Disabled since we use init.sql for schema
});
