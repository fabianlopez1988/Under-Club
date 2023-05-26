import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PodcastDocument } from '../entities/podcast.entity';
import { CreatePodcastDto, UpdatePodcastDto } from '../dtos/posdcast.dto';

@Injectable()
export class PodcastsService {
  constructor(
    @InjectModel('podcast')
    private readonly podcastModel: Model<PodcastDocument>,
  ) {}

  async createPodcast(
    CreatePodcastDto: CreatePodcastDto,
  ): Promise<CreatePodcastDto> {
    return this.podcastModel.create(CreatePodcastDto);
  }

  async getPodcasts(): Promise<CreatePodcastDto[]> {
    const podcast = await this.podcastModel.find();
    return podcast;
  }

  async getPodcast(podcastId: string): Promise<CreatePodcastDto> {
    const podcast = await this.podcastModel.findById(podcastId);
    return podcast;
  }

  async updatePodcast(
    podcastId: string,
    updatePodcastDto: UpdatePodcastDto,
  ): Promise<UpdatePodcastDto> {
    const updatedPodcast = await this.podcastModel.findByIdAndUpdate(
      podcastId,
      updatePodcastDto,
      { new: true },
    );
    return updatedPodcast;
  }

  async deletePodcast(podcastId: string): Promise<CreatePodcastDto> {
    const deletePodcast = await this.podcastModel.findByIdAndDelete(podcastId);
    return deletePodcast;
  }
}
