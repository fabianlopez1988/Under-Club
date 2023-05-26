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
import { CreateResidentDto, UpdateResidentDto } from '../dtos/residents.dto';
import { ResidentService } from '../services/residents.service';
import {
  ApiTags,
  ApiResponse,
  ApiParam,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('residents')
@Controller('residents')
export class ResidentController {
  constructor(private readonly residentService: ResidentService) {}

  @ApiOperation({ summary: 'Crear residente' })
  @ApiResponse({
    status: 201,
    description: 'El residente fue creado exitosamente.',
    type: CreateResidentDto,
  })
  @ApiBadRequestResponse({ description: 'La data provista es inválida.' })
  @ApiBody({ type: CreateResidentDto })
  @Post()
  createResident(@Body() createResidentDto: CreateResidentDto) {
    const newResident = this.residentService.createResident(createResidentDto);
    return newResident;
  }

  @ApiOperation({ summary: 'Devolver todos los residentes' })
  @ApiResponse({
    status: 200,
    description: 'Lista de todos los residentes.',
    type: [CreateResidentDto],
  })
  @Get()
  async getAllResidents() {
    const allResidents = await this.residentService.getAllResidents();
    return allResidents;
  }

  @ApiOperation({ summary: 'Obtener residente por ID' })
  @ApiResponse({
    status: 200,
    description: 'El residente correspondiente al ID especificado.',
    type: CreateResidentDto,
  })
  @ApiNotFoundResponse({ description: 'El residente no existe.' })
  @ApiParam({
    name: 'residentId',
    description: 'ID del residente',
  })
  @Get('/:residentId')
  async getResidentById(@Param('residentId') residentId) {
    const getResident = await this.residentService.getResidentById(residentId);
    if (!getResident) throw new NotFoundException('El residente no existe');
    return getResident;
  }

  @ApiOperation({ summary: 'Actualizar un residente' })
  @ApiResponse({
    status: 200,
    description: 'El residente fue actualizado exitosamente.',
    type: UpdateResidentDto,
  })
  @ApiNotFoundResponse({ description: 'El residente no existe.' })
  @ApiParam({
    name: 'residentId',
    description: 'ID del residente',
  })
  @Put('/:residentId')
  async updateResident(
    @Param('residentId') residentId: string,
    @Body() updateResident: UpdateResidentDto,
  ) {
    return this.residentService.updateResident(residentId, updateResident);
  }

  @ApiOperation({ summary: 'Eliminar un residente' })
  @ApiResponse({
    status: 200,
    description: 'El residente fue eliminado exitosamente.',
  })
  @ApiNotFoundResponse({
    description: 'El rresidente no existe.',
  })
  @ApiParam({
    name: 'residentId',
    description: 'ID del residente',
  })
  @Delete('/:residentId')
  async deleteResident(@Param('residentId') residentId) {
    const deleteResident = await this.residentService.deleteResident(
      residentId,
    );
    if (!deleteResident) throw new NotFoundException('El residente no existe.');
    return {
      message: 'El residente fue eliminado exitosamente. ',
    };
  }
}
