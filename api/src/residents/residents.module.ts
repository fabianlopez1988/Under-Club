import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResidentController } from './controllers/residents.controller';
import { ResidentSchema } from './entities/residents.entity';
import { ResidentService } from './services/residents.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'residents', schema: ResidentSchema }]),
  ],
  controllers: [ResidentController],
  providers: [ResidentService],
  exports: [ResidentService],
})
export class ResidentModule {}
