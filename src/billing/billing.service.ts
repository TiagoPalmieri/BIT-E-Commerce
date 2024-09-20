import { Injectable } from '@nestjs/common';
import { CreateBillingDto } from './dto/create-billing.dto';
import { UpdateBillingDto } from './dto/update-billing.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Billing } from './entities/billing.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BillingService {
  constructor(@InjectRepository(Billing)
  private readonly billingRepository: Repository<Billing>
  ) { }
  async create(createBillingDto: CreateBillingDto) {
    const newBilling = this.billingRepository.create(createBillingDto);
    return await this.billingRepository.save(newBilling);
  }

  async findAll() {
    return await this.billingRepository.find();
  }

  async findOne(invoiceId: number) {
    return await this.billingRepository.findOneBy({ invoiceId });
  }

  async update(invoiceId: number, updateBillingDto: UpdateBillingDto) {
    return await this.billingRepository.update(invoiceId, updateBillingDto);
  }

  async remove(invoiceId: number) {
    return this.billingRepository.delete(invoiceId);
  }
}
