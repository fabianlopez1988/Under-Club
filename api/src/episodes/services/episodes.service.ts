import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EpisodeDocument } from '../entities/episodes.entity';
import { CreateEpisodeDto, UpdateEpisodeDto } from '../dtos/episodes.dto';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class EpisodesService {
  constructor(
    @InjectModel('episode')
    private readonly episodeModel: Model<EpisodeDocument>,
  ) {}

  async createEpisode(
    CreateEpisodeDto: CreateEpisodeDto,
  ): Promise<CreateEpisodeDto> {
    return this.episodeModel.create(CreateEpisodeDto);
  }

  async getEpisodes(): Promise<CreateEpisodeDto[]> {
    const episodes = await this.episodeModel.find();
    return episodes;
  }

  async getEpisode(episodeId: string): Promise<CreateEpisodeDto> {
    const episode = await this.episodeModel.findById(episodeId);
    return episode;
  }

  async updateEpisode(
    episodeId: string,
    updateEpisodeDto: UpdateEpisodeDto,
  ): Promise<UpdateEpisodeDto> {
    const updatedEpisode = await this.episodeModel.findByIdAndUpdate(
      episodeId,
      updateEpisodeDto,
      { new: true },
    );
    return updatedEpisode;
  }

  async deleteEpisode(episodeId: string): Promise<CreateEpisodeDto> {
    const deleteEpisode = await this.episodeModel.findByIdAndDelete(episodeId);
    return deleteEpisode;
  }
}
