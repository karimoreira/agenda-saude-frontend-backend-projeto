import { Doctor } from '../entities/doctor.entity';

export interface IDoctorsRepository {
  findAll(): Promise<Doctor[]>;
  findById(id: number): Promise<Doctor | null>;
}

export const DOCTORS_REPOSITORY = Symbol('DOCTORS_REPOSITORY');
