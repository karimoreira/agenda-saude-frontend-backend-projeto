import { Appointment } from '../entities/appointment.entity';

export interface IAppointmentsRepository {
  save(appointment: Appointment): Promise<Appointment>;
  findByDoctorAndSlot(doctorId: number, day: string, time: string): Promise<Appointment | null>;
  findAll(): Promise<Appointment[]>;
}

export const APPOINTMENTS_REPOSITORY = Symbol('APPOINTMENTS_REPOSITORY');
