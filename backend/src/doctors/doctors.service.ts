import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Doctor } from './entities/doctor.entity';
import { DOCTORS_REPOSITORY, IDoctorsRepository } from './repositories/doctors.repository.interface';

@Injectable()
export class DoctorsService {
  constructor(
    @Inject(DOCTORS_REPOSITORY)
    private readonly repository: IDoctorsRepository,
  ) {}

  findAll(): Promise<Doctor[]> {
    return this.repository.findAll();
  }

  async findOne(id: number): Promise<Doctor> {
    const doctor = await this.repository.findById(id);
    if (!doctor) {
      throw new NotFoundException(`Médico com id ${id} não encontrado`);
    }
    return doctor;
  }
}
