import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewDocument } from '../entities/news.entity';
import { CreateNewDto, UpdateNewDto } from '../dtos/news.dto';

@Injectable()
export class NewsService {
  constructor(
    @InjectModel('new')
    private readonly newModel: Model<NewDocument>,
  ) {}

  async createNew(CreateNewDto: CreateNewDto): Promise<CreateNewDto> {
    return this.newModel.create(CreateNewDto);
  }

  async getNews(): Promise<CreateNewDto[]> {
    const news = await this.newModel.find();
    return news;
  }

  async getNew(newId: string): Promise<CreateNewDto> {
    const getNew = await this.newModel.findById(newId);
    return getNew;
  }

  async updateNew(
    newId: string,
    updateNewDto: UpdateNewDto,
  ): Promise<UpdateNewDto> {
    const updatedNew = await this.newModel.findByIdAndUpdate(
      newId,
      updateNewDto,
      { new: true },
    );
    return updatedNew;
  }

  async deleteNew(newId: string): Promise<CreateNewDto> {
    const deleteNew = await this.newModel.findByIdAndDelete(newId);
    return deleteNew;
  }
}
