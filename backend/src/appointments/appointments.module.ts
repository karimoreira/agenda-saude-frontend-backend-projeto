import { Module } from '@nestjs/common';
import { DoctorsModule } from '../doctors/doctors.module';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';
import { APPOINTMENTS_REPOSITORY } from './repositories/appointments.repository.interface';
import { InMemoryAppointmentsRepository } from './repositories/in-memory-appointments.repository';

@Module({
  imports: [DoctorsModule],
  controllers: [AppointmentsController],
  providers: [
    AppointmentsService,
    { provide: APPOINTMENTS_REPOSITORY, useClass: InMemoryAppointmentsRepository },
  ],
})
export class AppointmentsModule {}
