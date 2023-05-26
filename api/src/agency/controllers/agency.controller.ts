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
import { CreateAgencyDto, UpdateAgencyDto } from '../dtos/agency.dto';
import { AgencyService } from '../services/agency.service';
import {
  ApiTags,
  ApiResponse,
  ApiParam,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('agency')
@Controller('agency')
export class AgencyController {
  constructor(private readonly agencyService: AgencyService) {}

  @ApiOperation({ summary: 'Crear residente internacional' })
  @ApiResponse({
    status: 201,
    description: 'El residente internacional fue creado exitosamente.',
    type: CreateAgencyDto,
  })
  @ApiBadRequestResponse({ description: 'La data provista es inválida.' })
  @ApiBody({ type: CreateAgencyDto })
  @Post()
  createInternationalResident(@Body() createAgencyDto: CreateAgencyDto) {
    const newResident =
      this.agencyService.createInternationalResident(createAgencyDto);
    return newResident;
  }

  @ApiOperation({ summary: 'Devolver todos los residentes internacionales' })
  @ApiResponse({
    status: 200,
    description: 'Lista de todos los residentes internacionales.',
    type: [CreateAgencyDto],
  })
  @Get()
  async getAllInternationalResidents() {
    const allAgency = await this.agencyService.getAllInternationalResidents();
    return allAgency;
  }

  @ApiOperation({ summary: 'Obtener residente internacional por ID' })
  @ApiResponse({
    status: 200,
    description: 'El residente correspondiente al ID especificado.',
    type: CreateAgencyDto,
  })
  @ApiNotFoundResponse({ description: 'El residente internacional no existe.' })
  @ApiParam({ name: 'agencyId', description: 'ID del residente internacional' })
  @Get('/:agencyId')
  async getInternationalResidentById(@Param('agencyId') agencyId) {
    const getResident = await this.agencyService.getInternationalResidentById(
      agencyId,
    );
    if (!getResident)
      throw new NotFoundException('El residente internacional no existe');
    return getResident;
  }

  @ApiOperation({ summary: 'Actualizar un residente internacional' })
  @ApiResponse({
    status: 200,
    description: 'El residente fue actualizado exitosamente.',
    type: UpdateAgencyDto,
  })
  @ApiNotFoundResponse({ description: 'El residente internacional no existe.' })
  @ApiParam({
    name: 'agencyId',
    description: 'ID del residente internacional',
  })
  @Put('/:agencyId')
  async updateInternationalResident(
    @Param('agencyId') agencyId: string,
    @Body() updateAgency: UpdateAgencyDto,
  ) {
    return this.agencyService.updateInternationalResident(
      agencyId,
      updateAgency,
    );
  }

  @ApiOperation({ summary: 'Eliminar un residente internacional' })
  @ApiResponse({
    status: 200,
    description: 'El residente internacional fue eliminado exitosamente.',
  })
  @ApiNotFoundResponse({
    description: 'El rresidente internacional no existe.',
  })
  @ApiParam({ name: 'agencyId', description: 'ID del residente internacional' })
  @Delete('/:agencyId')
  async deleteInternationalResident(@Param('agencyId') agencyId) {
    const deleteResident = await this.agencyService.deleteInternationalResident(
      agencyId,
    );
    if (!deleteResident)
      throw new NotFoundException('El residente internacional no existe.');
    return {
      message: 'El residente internacional fue eliminado exitosamente. ',
    };
  }
}
