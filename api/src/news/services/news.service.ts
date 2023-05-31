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
    const trimmedTitle = CreateNewDto.newsTitle.trim();
    const normalizedTitle = trimmedTitle
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    const modifiedTitle = normalizedTitle.replace(/\s+/g, '-');
    const modifiedDto = {
      ...CreateNewDto,
      newsTitle: modifiedTitle,
    };

    const createdNew = await this.newModel.create(modifiedDto);

    return createdNew.save();
  }

  async getNews(): Promise<CreateNewDto[]> {
    const news = await this.newModel.find();
    return news;
  }

  async getNew(newId: string): Promise<CreateNewDto> {
    const getNew = await this.newModel.findById(newId);
    return getNew;
  }

  async getNewsByTitle(title: string): Promise<CreateNewDto> {
    const getNewByTitle = await this.newModel.findOne({
      newsTitle: title,
    });
    return getNewByTitle;
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
