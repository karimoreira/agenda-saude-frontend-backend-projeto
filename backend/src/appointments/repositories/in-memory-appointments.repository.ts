import { Injectable } from '@nestjs/common';
import { Appointment } from '../entities/appointment.entity';
import { IAppointmentsRepository } from './appointments.repository.interface';

@Injectable()
export class InMemoryAppointmentsRepository implements IAppointmentsRepository {
  private readonly appointments: Appointment[] = [];

  async save(appointment: Appointment): Promise<Appointment> {
    this.appointments.push(appointment);
    return appointment;
  }

  async findByDoctorAndSlot(doctorId: number, day: string, time: string): Promise<Appointment | null> {
    return (
      this.appointments.find(
        (a) => a.doctorId === doctorId && a.day === day && a.time === time,
      ) ?? null
    );
  }

  async findAll(): Promise<Appointment[]> {
    return this.appointments;
  }
}
