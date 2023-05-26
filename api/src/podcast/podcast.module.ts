import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PodcastsController } from './controllers/podcast.controller';
import { PodcastSchema } from './entities/podcast.entity';
import { PodcastsService } from './services/podcast.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'podcast', schema: PodcastSchema }]),
  ],
  controllers: [PodcastsController],
  providers: [PodcastsService],
  exports: [PodcastsService],
})
export class PodcastsModule {}
