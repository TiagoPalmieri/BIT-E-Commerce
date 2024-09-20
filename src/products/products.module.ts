import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Publication } from 'src/publications/entities/publication.entity';
import { Image } from 'src/images/entities/image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Image, Publication]),],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
