import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { File } from './entities/file.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FileService {
  constructor(@InjectRepository(File)
  private readonly fileRepository: Repository<File>) { }

  create(filename: string) {
    const newFile = this.fileRepository.create({ name: filename });
    return this.fileRepository.save(newFile);
  }

  findAll() {
    return this.fileRepository.find();
  }

  findOne(name: string) {
    return this.fileRepository.findOneBy({ name });
  }
}
