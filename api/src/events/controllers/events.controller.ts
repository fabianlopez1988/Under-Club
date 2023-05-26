import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateEventDto, UpdateEventDto } from '../dtos/events.dto';
import { EventsService } from '../services/events.service';
import {
  ApiTags,
  ApiResponse,
  ApiParam,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventService: EventsService) {}

  @ApiOperation({ summary: 'Crear event' })
  @ApiResponse({
    status: 201,
    description: 'El event fue creado exitosamente.',
    type: CreateEventDto,
  })
  @ApiBadRequestResponse({ description: 'La data provista es inválida.' })
  @ApiBody({ type: CreateEventDto })
  @Post()
  createEvent(@Body() createEventDto: CreateEventDto) {
    const newEvent = this.eventService.createEvent(createEventDto);
    return newEvent;
  }

  @ApiOperation({ summary: 'Devolver todos los events' })
  @ApiResponse({
    status: 200,
    description: 'Lista de todos los events.',
    type: [CreateEventDto],
  })
  @Get()
  async getEvents() {
    const events = await this.eventService.getEvents();
    return events;
  }

  @ApiOperation({ summary: 'Obtener event por ID' })
  @ApiResponse({
    status: 200,
    description: 'El event correspondiente al ID especificado.',
    type: CreateEventDto,
  })
  @ApiNotFoundResponse({ description: 'El event no existe.' })
  @ApiParam({ name: 'eventId', description: 'ID del event' })
  @Get('/:eventId')
  async getEvent(@Param('eventId') eventId) {
    const eventid = await this.eventService.getEvent(eventId);
    if (!eventid) throw new NotFoundException('Event does not exists');
    return eventid;
  }

  @ApiOperation({ summary: 'Actualizar un event' })
  @ApiResponse({
    status: 200,
    description: 'El event fue actualizado exitosamente.',
    type: UpdateEventDto,
  })
  @ApiNotFoundResponse({ description: 'El event no existe.' })
  @ApiParam({ name: 'eventId', description: 'ID del event' })
  @Put('/:eventId')
  async eventId(
    @Param('eventId') eventId: string,
    @Body() updateEvent: UpdateEventDto,
  ) {
    return this.eventService.updateEvent(eventId, updateEvent);
  }

  @ApiOperation({ summary: 'Eliminar un event' })
  @ApiResponse({
    status: 200,
    description: 'El event fue eliminado exitosamente.',
  })
  @ApiNotFoundResponse({ description: 'El event no existe.' })
  @ApiParam({ name: 'eventId', description: 'ID del event' })
  @Delete('/:eventId')
  async deleteEvent(@Param('eventId') eventId) {
    const deleteEvent = await this.eventService.deleteEvent(eventId);
    if (!deleteEvent) throw new NotFoundException('Event does not exists');
    return { message: 'Event deleted succesfully' };
  }
}
