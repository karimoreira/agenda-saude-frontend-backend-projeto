import { Module } from '@nestjs/common';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';
import { DOCTORS_REPOSITORY } from './repositories/doctors.repository.interface';
import { InMemoryDoctorsRepository } from './repositories/in-memory-doctors.repository';

@Module({
  controllers: [DoctorsController],
  providers: [
    DoctorsService,
    { provide: DOCTORS_REPOSITORY, useClass: InMemoryDoctorsRepository },
  ],
  exports: [DoctorsService],
})
export class DoctorsModule {}
