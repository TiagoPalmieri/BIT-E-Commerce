import { Module } from '@nestjs/common';
import { BillingService } from './billing.service';
import { BillingController } from './billing.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from 'src/seller/entities/seller.entity';
import { User } from 'src/users/entities/user.entity';
import { Billing } from './entities/billing.entity';

@Module({
  controllers: [BillingController],
  providers: [BillingService],
  imports: [TypeOrmModule.forFeature([Billing, User, Seller])]
})
export class BillingModule {}
