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
import { CreatePodcastDto, UpdatePodcastDto } from '../dtos/posdcast.dto';
import { PodcastsService } from '../services/podcast.service';
import {
  ApiTags,
  ApiResponse,
  ApiParam,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('podcast')
@Controller('podcast')
export class PodcastsController {
  constructor(private readonly podcastsService: PodcastsService) {}

  @ApiOperation({ summary: 'Crear podcast' })
  @ApiResponse({
    status: 201,
    description: 'El podcast fue creado exitosamente.',
    type: CreatePodcastDto,
  })
  @ApiBadRequestResponse({ description: 'La data provista es inválida.' })
  @ApiBody({ type: CreatePodcastDto })
  @Post()
  createPodcast(@Body() createPodcastDto: CreatePodcastDto) {
    const newPodcast = this.podcastsService.createPodcast(createPodcastDto);
    return newPodcast;
  }

  @ApiOperation({ summary: 'Devolver todos los podcasts' })
  @ApiResponse({
    status: 200,
    description: 'Lista de todos los podcasts.',
    type: [CreatePodcastDto],
  })
  @Get()
  async getPodcasts() {
    const podcasts = await this.podcastsService.getPodcasts();
    return podcasts;
  }

  @ApiOperation({ summary: 'Obtener podcast por ID' })
  @ApiResponse({
    status: 200,
    description: 'El podcast correspondiente al ID especificado.',
    type: CreatePodcastDto,
  })
  @ApiNotFoundResponse({ description: 'El podcast no existe.' })
  @ApiParam({ name: 'podcastId', description: 'ID del podcast' })
  @Get('/:podcastId')
  async getPodcast(@Param('podcastId') podcastId) {
    const podcastid = await this.podcastsService.getPodcast(podcastId);
    if (!podcastid) throw new NotFoundException('Podcast does not exists');
    return podcastid;
  }

  @ApiOperation({ summary: 'Actualizar un podcast' })
  @ApiResponse({
    status: 200,
    description: 'El podcast fue actualizado exitosamente.',
    type: UpdatePodcastDto,
  })
  @ApiNotFoundResponse({ description: 'El podcast no existe.' })
  @ApiParam({ name: 'podcastId', description: 'ID del podcast' })
  @Put('/:podcastId')
  async podcastId(
    @Param('podcastId') podcastId: string,
    @Body() updatePodcast: UpdatePodcastDto,
  ) {
    return this.podcastsService.updatePodcast(podcastId, updatePodcast);
  }

  @ApiOperation({ summary: 'Eliminar un podcast' })
  @ApiResponse({
    status: 200,
    description: 'El podcast fue eliminado exitosamente.',
  })
  @ApiNotFoundResponse({ description: 'El podcast no existe.' })
  @ApiParam({ name: 'podcastId', description: 'ID del podcast' })
  @Delete('/:podcastId')
  async deletePodcast(@Param('podcastId') podcastId) {
    const deletePodcast = await this.podcastsService.deletePodcast(podcastId);
    if (!deletePodcast) throw new NotFoundException('Podcast does not exists');
    return { message: 'Podcast deleted succesfully' };
  }
}
