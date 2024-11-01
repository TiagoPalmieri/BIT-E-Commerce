import { Module } from '@nestjs/common';
import { TransactionHistoryService } from './transaction-history.service';
import { TransactionHistoryController } from './transaction-history.controller';
import { TransactionHistory } from './entities/transaction-history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from 'src/seller/entities/seller.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TransactionHistory, User, Seller])
  ],
  controllers: [TransactionHistoryController],
  providers: [TransactionHistoryService],
})
export class TransactionHistoryModule {}
