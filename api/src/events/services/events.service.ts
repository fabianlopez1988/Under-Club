import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EventDocument } from '../entities/events.entity';
import { CreateEventDto, UpdateEventDto } from '../dtos/events.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel('event')
    private readonly eventModel: Model<EventDocument>,
  ) {}

  async createEvent(CreateEventDto: CreateEventDto): Promise<CreateEventDto> {
    return this.eventModel.create(CreateEventDto);
  }

  async getEvents(): Promise<CreateEventDto[]> {
    try {
      const events = await this.eventModel
        .find({
          date: { $gte: new Date() },
        })
        .sort({ date: 'asc' });

      return events;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getEvent(eventId: string): Promise<CreateEventDto> {
    const event = await this.eventModel.findById(eventId);
    return event;
  }

  async updateEvent(
    eventId: string,
    updateEventDto: UpdateEventDto,
  ): Promise<UpdateEventDto> {
    const updatedEvent = await this.eventModel.findByIdAndUpdate(
      eventId,
      updateEventDto,
      { new: true },
    );
    return updatedEvent;
  }

  async deleteEvent(eventId: string): Promise<CreateEventDto> {
    const deleteEvent = await this.eventModel.findByIdAndDelete(eventId);
    return deleteEvent;
  }
}
