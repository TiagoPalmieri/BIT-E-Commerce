import { Image } from 'src/images/entities/image.entity';
import { Publication } from 'src/publications/entities/publication.entity';
import { TransactionHistory } from 'src/transaction-history/entities/transaction-history.entity';
import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {

  @PrimaryGeneratedColumn()
  id: number; 

  @Column('text')
  description: string;

  @Column({
    type: 'enum',
    enum: ['type1', 'type2', 'type3'],
  })
  type: 'type1' | 'type2' | 'type3';

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ default: 0 })
  stock: number;

  @Column({ default: false })
  favorites: boolean;

  @OneToMany(() => Publication, (publication) => publication.product)
  publications: Publication[];

  @OneToMany(()=> Image, (image) => image.product)
  images: Image[]

  @OneToMany(()=> TransactionHistory, (transactionHistories) => transactionHistories.product)
  transactionHistories: TransactionHistory[]
}

