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
import { CreateEpisodeDto, UpdateEpisodeDto } from '../dtos/episodes.dto';
import { EpisodesService } from '../services/episodes.service';
import {
  ApiTags,
  ApiResponse,
  ApiParam,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('episode')
@Controller('episode')
export class EpisodesController {
  constructor(private readonly episodeService: EpisodesService) {}

  @ApiOperation({ summary: 'Crear episode' })
  @ApiResponse({
    status: 201,
    description: 'El episode fue creado exitosamente.',
    type: CreateEpisodeDto,
  })
  @ApiBadRequestResponse({ description: 'La data provista es inválida.' })
  @ApiBody({ type: CreateEpisodeDto })
  @Post()
  createEpisode(@Body() createEpisodeDto: CreateEpisodeDto) {
    const newEpisode = this.episodeService.createEpisode(createEpisodeDto);
    return newEpisode;
  }

  @ApiOperation({ summary: 'Devolver todos los episodes' })
  @ApiResponse({
    status: 200,
    description: 'Lista de todos los episodes.',
    type: [CreateEpisodeDto],
  })
  @Get()
  async getEpisodes() {
    const episodes = await this.episodeService.getEpisodes();
    return episodes;
  }

  @ApiOperation({ summary: 'Obtener episode por ID' })
  @ApiResponse({
    status: 200,
    description: 'El episode correspondiente al ID especificado.',
    type: CreateEpisodeDto,
  })
  @ApiNotFoundResponse({ description: 'El episode no existe.' })
  @ApiParam({ name: 'episodeId', description: 'ID del episode' })
  @Get('/:episodeId')
  async getEpisode(@Param('episodeId') episodeId) {
    const episodeid = await this.episodeService.getEpisode(episodeId);
    if (!episodeid) throw new NotFoundException('Episode does not exists');
    return episodeid;
  }

  @ApiOperation({ summary: 'Actualizar un episode' })
  @ApiResponse({
    status: 200,
    description: 'El episode fue actualizado exitosamente.',
    type: UpdateEpisodeDto,
  })
  @ApiNotFoundResponse({ description: 'El episode no existe.' })
  @ApiParam({ name: 'episodeId', description: 'ID del episode' })
  @Put('/:episodeId')
  async episodeId(
    @Param('episodeId') episodeId: string,
    @Body() updateEpisode: UpdateEpisodeDto,
  ) {
    return this.episodeService.updateEpisode(episodeId, updateEpisode);
  }

  @ApiOperation({ summary: 'Eliminar un episode' })
  @ApiResponse({
    status: 200,
    description: 'El episode fue eliminado exitosamente.',
  })
  @ApiNotFoundResponse({ description: 'El episode no existe.' })
  @ApiParam({ name: 'episodeId', description: 'ID del episode' })
  @Delete('/:episodeId')
  async deleteEpisode(@Param('episodeId') episodeId) {
    const deleteEpisode = await this.episodeService.deleteEpisode(episodeId);
    if (!deleteEpisode) throw new NotFoundException('Episode does not exists');
    return { message: 'Episode deleted succesfully' };
  }
}
