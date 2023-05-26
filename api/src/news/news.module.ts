import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsController } from './controllers/news.controller';
import { NewSchema } from './entities/news.entity';
import { NewsService } from './services/news.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'new', schema: NewSchema }])],
  controllers: [NewsController],
  providers: [NewsService],
  exports: [NewsService],
})
export class NewsModule {}
