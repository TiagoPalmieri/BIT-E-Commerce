import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product)
  private readonly productsRepository: Repository<Product>
  ) { }
  async create(createProductDto: CreateProductDto) {
    const newProduct = this.productsRepository.create(createProductDto);
    return await this.productsRepository.save(newProduct);
  }

  async findAll() {
    return await this.productsRepository.find();
  }

  async findOne(id: number) {
    return await this.productsRepository.findOneBy({ id });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.productsRepository.update(id, updateProductDto);
  }

  async remove(id: number) {
    return await this.productsRepository.delete({ id });
  }
}
