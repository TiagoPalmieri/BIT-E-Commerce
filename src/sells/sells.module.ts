import { Module } from '@nestjs/common';
import { SellsService } from './sells.service';
import { SellsController } from './sells.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from 'src/seller/entities/seller.entity';
import { User } from 'src/users/entities/user.entity';
import { Sell } from './entities/sell.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sell, User, Seller]),
  ],
  controllers: [SellsController],
  providers: [SellsService],
})
export class SellsModule {}
