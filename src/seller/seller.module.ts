import { Module } from '@nestjs/common';
import { SellerService } from './seller.service';
import { SellerController } from './seller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Seller } from './entities/seller.entity';
import { TransactionHistory } from 'src/transaction-history/entities/transaction-history.entity';

@Module({
  controllers: [SellerController],
  providers: [SellerService],
  imports: [
    TypeOrmModule.forFeature([Seller, User, TransactionHistory]),
  ],
})
export class SellerModule {}
