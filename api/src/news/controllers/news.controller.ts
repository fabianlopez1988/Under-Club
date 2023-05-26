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
import { CreateNewDto, UpdateNewDto } from '../dtos/news.dto';
import { NewsService } from '../services/news.service';
import {
  ApiTags,
  ApiResponse,
  ApiParam,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('new')
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @ApiOperation({ summary: 'Crear new' })
  @ApiResponse({
    status: 201,
    description: 'El new fue creado exitosamente.',
    type: CreateNewDto,
  })
  @ApiBadRequestResponse({ description: 'La data provista es inválida.' })
  @ApiBody({ type: CreateNewDto })
  @Post()
  createNew(@Body() createNewDto: CreateNewDto) {
    const createNew = this.newsService.createNew(createNewDto);
    return createNew;
  }

  @ApiOperation({ summary: 'Devolver todos los news' })
  @ApiResponse({
    status: 200,
    description: 'Lista de todos los news.',
    type: [CreateNewDto],
  })
  @Get()
  async getNews() {
    const news = await this.newsService.getNews();
    return news;
  }

  @ApiOperation({ summary: 'Obtener new por ID' })
  @ApiResponse({
    status: 200,
    description: 'El new correspondiente al ID especificado.',
    type: CreateNewDto,
  })
  @ApiNotFoundResponse({ description: 'El new no existe.' })
  @ApiParam({ name: 'newId', description: 'ID del new' })
  @Get('/:newId')
  async getNew(@Param('newId') newId) {
    const newid = await this.newsService.getNew(newId);
    if (!newid) throw new NotFoundException('New does not exists');
    return newid;
  }

  @ApiOperation({ summary: 'Actualizar un new' })
  @ApiResponse({
    status: 200,
    description: 'El new fue actualizado exitosamente.',
    type: UpdateNewDto,
  })
  @ApiNotFoundResponse({ description: 'El new no existe.' })
  @ApiParam({ name: 'newId', description: 'ID del new' })
  @Put('/:newId')
  async newId(@Param('newId') newId: string, @Body() updateNew: UpdateNewDto) {
    return this.newsService.updateNew(newId, updateNew);
  }

  @ApiOperation({ summary: 'Eliminar un new' })
  @ApiResponse({
    status: 200,
    description: 'El new fue eliminado exitosamente.',
  })
  @ApiNotFoundResponse({ description: 'El new no existe.' })
  @ApiParam({ name: 'newId', description: 'ID del new' })
  @Delete('/:newId')
  async deleteNew(@Param('newId') newId) {
    const deleteNew = await this.newsService.deleteNew(newId);
    if (!deleteNew) throw new NotFoundException('New does not exists');
    return { message: 'New deleted succesfully' };
  }
}
