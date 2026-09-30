import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Index({ unique: true })
  @Column({ type: "text", nullable: false })
  sku!: string;

  @Column({ type: "text", nullable: false })
  name!: string;

  @Column({ type: "int", default: 0, nullable: false })
  stock!: number;
}
