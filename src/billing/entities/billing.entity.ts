import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Seller } from 'src/seller/entities/seller.entity';

@Entity()
export class Billing {
  @PrimaryGeneratedColumn()
  invoiceId: number;

  @Column()
  buyDate: Date;

  @ManyToOne(() => Seller, (seller) => seller.transactionHistories, { onDelete: 'CASCADE' })
  seller: Seller;

  @ManyToOne(() => User, (user) => user.transactionHistories, { onDelete: 'CASCADE' })
  buyer: User;
}