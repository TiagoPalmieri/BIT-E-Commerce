import { Module } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { PublicationsController } from './publications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publication } from './entities/publication.entity';
import { Product } from 'src/products/entities/product.entity';
import { Seller } from 'src/seller/entities/seller.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Publication, Product, Seller]), // Registra el repositorio basado en la entidad
  ],
  controllers: [PublicationsController],
  providers: [PublicationsService],
})
export class PublicationsModule {}
