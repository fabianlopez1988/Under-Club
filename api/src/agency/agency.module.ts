import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgencyController } from './controllers/agency.controller';
import { AgencySchema } from './entities/agency.entity';
import { AgencyService } from './services/agency.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'agency', schema: AgencySchema }]),
  ],
  controllers: [AgencyController],
  providers: [AgencyService],
  exports: [AgencyService],
})
export class AgencyModule {}
