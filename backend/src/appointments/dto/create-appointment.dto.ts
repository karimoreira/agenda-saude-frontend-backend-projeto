import { Type } from 'class-transformer';
import {
  IsInt, IsNotEmpty, IsOptional, IsString,
  Matches, MinLength, ValidateNested,
} from 'class-validator';

class SlotDto {
  @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'day deve estar no formato yyyy-mm-dd' })
  day: string;

  @Matches(/^\d{2}:\d{2}$/, { message: 'time deve estar no formato HH:mm' })
  time: string;
}

class PatientDto {
  @IsString()
  @MinLength(3, { message: 'nome deve ter ao menos 3 caracteres' })
  name: string;

  @IsString()
  @MinLength(8, { message: 'telefone deve ter ao menos 8 caracteres' })
  phone: string;

  @IsOptional()
  @IsString()
  reason?: string;
}

export class CreateAppointmentDto {
  @IsInt()
  @IsNotEmpty()
  doctorId: number;

  @ValidateNested()
  @Type(() => SlotDto)
  slot: SlotDto;

  @ValidateNested()
  @Type(() => PatientDto)
  patient: PatientDto;
}
