import { TransactionHistory } from "src/transaction-history/entities/transaction-history.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Seller {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({ default: 0 })
    sells: number;

    @Column({ default: 0 })
    publications: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    gains: number;

    @Column({ default: 0 })
    calification: number;

    @OneToOne(() => User, (user) => user.seller, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userId' })
    user: User;

    @OneToMany(()=> TransactionHistory, (transactionHistory) => transactionHistory.seller)
    transactionHistories: TransactionHistory[];
}
