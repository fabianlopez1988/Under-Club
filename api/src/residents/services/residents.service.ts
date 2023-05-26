import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResidentDocument } from '../entities/residents.entity';
import { CreateResidentDto, UpdateResidentDto } from '../dtos/residents.dto';

@Injectable()
export class ResidentService {
  constructor(
    @InjectModel('residents')
    private readonly residentModel: Model<ResidentDocument>,
  ) {}

  async createResident(
    createResidentDto: CreateResidentDto,
  ): Promise<CreateResidentDto> {
    return this.residentModel.create(createResidentDto);
  }

  async getResidentById(residentId: string): Promise<CreateResidentDto> {
    const getResident = await this.residentModel
      .findById(residentId)
      .sort({ name: 1 })
      .exec();
    return getResident;
  }

  async getAllResidents(): Promise<CreateResidentDto[]> {
    const allResidents = await this.residentModel.find();
    return allResidents;
  }

  async deleteResident(residentId: string): Promise<CreateResidentDto> {
    return await this.residentModel.findByIdAndDelete(residentId);
  }

  async updateResident(
    residentId: string,
    updateResidentDto: UpdateResidentDto,
  ): Promise<UpdateResidentDto> {
    const updateResident = await this.residentModel.findByIdAndUpdate(
      residentId,
      updateResidentDto,
      { new: true },
    );
    return updateResident;
  }
}
