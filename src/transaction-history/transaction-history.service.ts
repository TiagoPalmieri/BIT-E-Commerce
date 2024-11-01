import { Injectable } from '@nestjs/common';
import { CreateTransactionHistoryDto } from './dto/create-transaction-history.dto';
import { UpdateTransactionHistoryDto } from './dto/update-transaction-history.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionHistory } from './entities/transaction-history.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionHistoryService {
  constructor(@InjectRepository(TransactionHistory)
  private readonly transactionRepository: Repository<TransactionHistory>) { }
  async create(createTransactionHistoryDto: CreateTransactionHistoryDto) {
    const newTransaction = this.transactionRepository.create(createTransactionHistoryDto);
    return await this.transactionRepository.save(newTransaction);
  }

  async findAll() {
    return await this.transactionRepository.find();
  }

  async findOne(id: number) {
    return await this.transactionRepository.findOneBy({ id });
  }

  async update(id: number, updateTransactionHistoryDto: UpdateTransactionHistoryDto) {
    return await this.transactionRepository.update(id, updateTransactionHistoryDto);
  }

  async remove(id: number) {
    return await this.transactionRepository.delete(id);
  }
}
