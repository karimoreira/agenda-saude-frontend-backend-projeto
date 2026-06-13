export class Appointment {
  id: string;
  doctorId: number;
  day: string;
  time: string;
  patientName: string;
  patientPhone: string;
  reason?: string;
  createdAt: Date;
}
