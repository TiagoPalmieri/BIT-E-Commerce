import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewsService {
  constructor(@InjectRepository(Review)
private readonly reviewRepository: Repository<Review>){ }
  async create(createReviewDto: CreateReviewDto) {
    const newReview = this.reviewRepository.create(createReviewDto);
    return await this.reviewRepository.save(newReview);
  }

  async findAll() {
    return await this.reviewRepository.find();
  }

  async findOne(id: number) {
    return await this.reviewRepository.findOneBy({id});
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    return await this.reviewRepository.update(id, updateReviewDto);
  }

  async remove(id: number) {
    return await this.reviewRepository.delete(id);
  }
}
