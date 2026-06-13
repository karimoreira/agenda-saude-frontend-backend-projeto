import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { DoctorsService } from '../doctors/doctors.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { Appointment } from './entities/appointment.entity';
import {
  APPOINTMENTS_REPOSITORY,
  IAppointmentsRepository,
} from './repositories/appointments.repository.interface';

@Injectable()
export class AppointmentsService {
  constructor(
    @Inject(APPOINTMENTS_REPOSITORY)
    private readonly repository: IAppointmentsRepository,
    private readonly doctorsService: DoctorsService,
  ) {}

  async create(dto: CreateAppointmentDto): Promise<Appointment> {

    await this.doctorsService.findOne(dto.doctorId);

    const existing = await this.repository.findByDoctorAndSlot(
      dto.doctorId, dto.slot.day, dto.slot.time,
    );
    if (existing) {
      throw new ConflictException('Este horário já está reservado');
    }

    const appointment: Appointment = {
      id: randomUUID(),
      doctorId: dto.doctorId,
      day: dto.slot.day,
      time: dto.slot.time,
      patientName: dto.patient.name,
      patientPhone: dto.patient.phone,
      reason: dto.patient.reason,
      createdAt: new Date(),
    };

    return this.repository.save(appointment);
  }

  findAll(): Promise<Appointment[]> {
    return this.repository.findAll();
  }
}
