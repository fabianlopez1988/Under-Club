import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsController } from './controllers/events.controller';
import { EventSchema } from './entities/events.entity';
import { EventsService } from './services/events.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'event', schema: EventSchema }]),
  ],
  controllers: [EventsController],
  providers: [EventsService],
  exports: [EventsService],
})
export class EventsModule {}
