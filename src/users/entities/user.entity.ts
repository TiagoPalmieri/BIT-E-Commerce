import { Transform } from "class-transformer";
import { Review } from "src/reviews/entities/review.entity";
import { Seller } from "src/seller/entities/seller.entity";
import { Sell } from "src/sells/entities/sell.entity";
import { TransactionHistory } from "src/transaction-history/entities/transaction-history.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

export enum UserRole {
    Admin = 'Admin',
    User = 'User',
    Moderator = 'Mod',
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column({select: false})
    password: string;

    @Column()
    fullname: string;

    @Column({ default: 0 })
    telephone: number;

    @Column({ nullable: true })
    dni: string;

    @Column({ nullable: true })
    @Transform(({ value }) => value.replace(/<[^>]*>?/gm, ''))
    address: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.User
    })
    rol: UserRole;

    @OneToOne(()=> Seller, (seller) => seller.user)
    seller: Seller; 

    @OneToMany(() => Review, (review) => review.user)
    reviews: Review[];

    @OneToMany(() => TransactionHistory, (transactionHistory) => transactionHistory.buyer)
  transactionHistories: TransactionHistory[]; 

  @OneToMany(() => Sell, (sell) => sell.buyer)
  sell: Sell[]; 
}

