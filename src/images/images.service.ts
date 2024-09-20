import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImagesService {
  constructor(@InjectRepository(Image)
  private readonly imageRepository: Repository<Image>) { }
  async create(createImageDto: CreateImageDto) {
    const newImage = this.imageRepository.create(createImageDto);
    return await this.imageRepository.save(newImage);
  }

  async findAll() {
    return await this.imageRepository.find();
  }

  async findOne(id: number) {
    return await this.imageRepository.findOneBy({ id });
  }

  async update(id: number, updateImageDto: UpdateImageDto) {
    return await this.imageRepository.update(id, updateImageDto);
  }

  async remove(id: number) {
    return await this.imageRepository.delete({ id });
  }
}
