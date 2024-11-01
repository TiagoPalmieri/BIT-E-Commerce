import { Injectable } from '@nestjs/common';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Seller } from './entities/seller.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SellerService {
  constructor(
    @InjectRepository(Seller) private readonly sellerRepository: Repository<Seller>
  ){ }
  async create(createSellerDto: CreateSellerDto) {
    const newSeller = this.sellerRepository.create(createSellerDto);
    return await this.sellerRepository.save(newSeller);
  }

  async findAll() {
    return await this.sellerRepository.find();
  }

  async findOne(userId: number) {
    return await this.sellerRepository.findOneBy({userId});
  }

  async update(id: number, updateSellerDto: UpdateSellerDto) {
    return await this.sellerRepository.update(id, updateSellerDto);
  }

  async remove(id: number) {
    return this.sellerRepository.delete(id);
  }
}
