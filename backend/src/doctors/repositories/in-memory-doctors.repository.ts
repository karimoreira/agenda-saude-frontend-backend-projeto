import { Injectable } from '@nestjs/common';
import { Doctor } from '../entities/doctor.entity';
import { IDoctorsRepository } from './doctors.repository.interface';

@Injectable()
export class InMemoryDoctorsRepository implements IDoctorsRepository {
  private readonly doctors: Doctor[] = [
    { id: 1, name: 'Dra. Marina Lopes', specialty: 'Cardiologia', city: 'São Paulo, SP', rating: 4.9, reviews: 212, price: 350, crm: 'CRM-SP 123456', telemedicine: true, bio: 'Cardiologista com 14 anos de experiência.', address: 'Av. Paulista, 1048 - Bela Vista' },
    { id: 2, name: 'Dr. Rafael Andrade', specialty: 'Dermatologia', city: 'São Paulo, SP', rating: 4.8, reviews: 167, price: 290, crm: 'CRM-SP 654321', telemedicine: true, bio: 'Especialista em dermatologia clínica e cirúrgica.', address: 'R. Augusta, 2200 - Jardins' },
    { id: 3, name: 'Dra. Camila Ferreira', specialty: 'Psicologia', city: 'Rio de Janeiro, RJ', rating: 5.0, reviews: 340, price: 220, crm: 'CRP 05/98765', telemedicine: true, bio: 'Psicóloga clínica com abordagem em TCC.', address: 'R. Visconde de Pirajá, 414 - Ipanema' },
    { id: 4, name: 'Dr. Bruno Carvalho', specialty: 'Ortopedia', city: 'Belo Horizonte, MG', rating: 4.7, reviews: 98, price: 310, crm: 'CRM-MG 112233', telemedicine: false, bio: 'Ortopedista especializado em joelho e medicina esportiva.', address: 'Av. do Contorno, 6061 - Savassi' },
    { id: 5, name: 'Dra. Juliana Mota', specialty: 'Pediatria', city: 'São Paulo, SP', rating: 4.9, reviews: 421, price: 280, crm: 'CRM-SP 778899', telemedicine: true, bio: 'Pediatra dedicada ao acompanhamento integral da criança.', address: 'R. Oscar Freire, 379 - Pinheiros' },
    { id: 6, name: 'Dra. Patrícia Nunes', specialty: 'Ginecologia', city: 'Curitiba, PR', rating: 4.8, reviews: 156, price: 330, crm: 'CRM-PR 445566', telemedicine: false, bio: 'Ginecologista e obstetra com foco em saúde da mulher.', address: 'Al. Dr. Carlos de Carvalho, 555 - Centro' },
  ];

  async findAll(): Promise<Doctor[]> {
    return this.doctors;
  }

  async findById(id: number): Promise<Doctor | null> {
    return this.doctors.find((d) => d.id === id) ?? null;
  }
}
