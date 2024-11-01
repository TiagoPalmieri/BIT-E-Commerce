import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Review } from 'src/reviews/entities/review.entity';
import { Seller } from 'src/seller/entities/seller.entity';
import { Sell } from 'src/sells/entities/sell.entity';
import { TransactionHistory } from 'src/transaction-history/entities/transaction-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Review, TransactionHistory, Sell, Seller]),],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
 