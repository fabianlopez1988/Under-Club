import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EpisodesController } from './controllers/episodes.controller';
import { EpisodeSchema } from './entities/episodes.entity';
import { EpisodesService } from './services/episodes.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'episode', schema: EpisodeSchema }]),
  ],
  controllers: [EpisodesController],
  providers: [EpisodesService],
  exports: [EpisodesService],
})
export class EpisodesModule {}
