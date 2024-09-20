import { Injectable } from '@nestjs/common';
import { CreateSellDto } from './dto/create-sell.dto';
import { UpdateSellDto } from './dto/update-sell.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sell } from './entities/sell.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SellsService {
  constructor(@InjectRepository(Sell) private readonly sellRepository: Repository<Sell>) { }
  async create(createSellDto: CreateSellDto) {
    const newSell = this.sellRepository.create(createSellDto);
    return await this.sellRepository.save(newSell);
  }

  async findAll() {
    return this.sellRepository.find();
  }

  async findOne(id: number) {
    return await this.sellRepository.findOneBy({ id });
  }

  async update(id: number, updateSellDto: UpdateSellDto) {
    return await this.sellRepository.update(id, updateSellDto);
  }

  async remove(id: number) {
    return await this.sellRepository.delete(id);
  }
}
