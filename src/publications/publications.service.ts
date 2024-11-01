import { Injectable } from '@nestjs/common';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Publication } from './entities/publication.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PublicationsService {
  constructor(@InjectRepository(Publication)
  private readonly publicationRepository: Repository<Publication>) { }
  async create(createPublicationDto: CreatePublicationDto) {
    const newPublication = this.publicationRepository.create(createPublicationDto);
    return await this.publicationRepository.save(newPublication);
  }

  async findAll() {
    return await this.publicationRepository.find();
  }

  async findOne(id: number) {
    return await this.publicationRepository.findOneBy({ id });
  }

  async update(id: number, updatePublicationDto: UpdatePublicationDto) {
    return await this.publicationRepository.update(id, updatePublicationDto);
  }

  async remove(id: number) {
    return await this.publicationRepository.delete({ id });
  }
}
