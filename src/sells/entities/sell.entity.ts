import { Seller } from 'src/seller/entities/seller.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';


@Entity()
export class Sell {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  sellDate: Date;

  @ManyToOne(() => User, (user) => user.sell, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'buyerId' }) 
  buyer: User;

  @ManyToOne(() => Seller, (seller) => seller.sells, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'sellerId' })
  seller: Seller;
}