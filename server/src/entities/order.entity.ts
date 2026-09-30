import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  sku!: string;

  @Column({ type: 'int' })
  qty!: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;
}
