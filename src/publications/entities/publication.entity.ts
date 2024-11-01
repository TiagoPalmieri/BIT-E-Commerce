import { Product } from 'src/products/entities/product.entity';
import { Seller } from 'src/seller/entities/seller.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Publication {
  @PrimaryGeneratedColumn()
  id: number; 

  @Column({ type: 'date' })
  date: Date;

  @Column('text')
  description: string;

  @Column({ length: 255 })
  title: string;

  @ManyToOne(() => Seller, (seller) => seller.publications, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'sellerId' }) 
  seller: Seller;

  @ManyToOne(() => Product, (product) => product.publications, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'productSku' }) 
  product: Product;
}
