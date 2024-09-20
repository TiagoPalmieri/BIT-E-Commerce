import { Product } from 'src/products/entities/product.entity';
import { Seller } from 'src/seller/entities/seller.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';


@Entity()
export class TransactionHistory {
  @PrimaryGeneratedColumn()
  id: number; 

  @ManyToOne(() => User, (user) => user.transactionHistories, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'buyerId' }) 
  buyer: User;

  @ManyToOne(() => Seller, (seller) => seller.transactionHistories, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'sellerId' })
  seller: Seller;

  @ManyToOne(() => Product, (product) => product.transactionHistories, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'productSku' }) 
  product: Product;
}