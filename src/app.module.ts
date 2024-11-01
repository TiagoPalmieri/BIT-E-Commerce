import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThrottlerModule } from '@nestjs/throttler';
import { SellsModule } from './sells/sells.module';
import { SellerModule } from './seller/seller.module';
import { BillingModule } from './billing/billing.module';
import { TransactionHistoryModule } from './transaction-history/transaction-history.module';
import { ImagesModule } from './images/images.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ProductsModule } from './products/products.module';
import { PublicationsModule } from './publications/publications.module';
import { AuthModule } from './auth/auth.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'user_crud',
      password: 'root',
      database: 'db_crud',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ThrottlerModule.forRoot([{
      ttl: 60,
      limit: 10,
    }]),
    UsersModule,
    SellsModule,
    SellerModule,
    BillingModule,
    TransactionHistoryModule,
    ImagesModule,
    ReviewsModule,
    ProductsModule,
    PublicationsModule,
    AuthModule,
    FileModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
