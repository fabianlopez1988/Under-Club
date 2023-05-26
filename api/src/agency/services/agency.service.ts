import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AgencyDocument } from '../entities/agency.entity';
import { CreateAgencyDto, UpdateAgencyDto } from '../dtos/agency.dto';

@Injectable()
export class AgencyService {
  constructor(
    @InjectModel('agency')
    private readonly agencyModel: Model<AgencyDocument>,
  ) {}

  async createInternationalResident(
    createAgencyDto: CreateAgencyDto,
  ): Promise<CreateAgencyDto> {
    return this.agencyModel.create(createAgencyDto);
  }

  async getInternationalResidentById(
    agencyId: string,
  ): Promise<CreateAgencyDto> {
    const getResident = await this.agencyModel
      .findById(agencyId)
      .sort({ name: 1 })
      .exec();
    return getResident;
  }

  async getAllInternationalResidents(): Promise<CreateAgencyDto[]> {
    const allAgency = await this.agencyModel.find();
    return allAgency;
  }

  async deleteInternationalResident(
    agencyId: string,
  ): Promise<CreateAgencyDto> {
    return await this.agencyModel.findByIdAndDelete(agencyId);
  }

  async updateInternationalResident(
    agencyId: string,
    updateAgencyDto: UpdateAgencyDto,
  ): Promise<UpdateAgencyDto> {
    const updateAgency = await this.agencyModel.findByIdAndUpdate(
      agencyId,
      updateAgencyDto,
      { new: true },
    );
    return updateAgency;
  }
}
