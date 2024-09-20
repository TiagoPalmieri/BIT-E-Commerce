import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { Publication } from 'src/publications/entities/publication.entity';
import { Image } from './entities/image.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Image, Publication]),
  ],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}
