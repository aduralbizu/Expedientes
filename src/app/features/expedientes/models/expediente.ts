export interface Expediente {
  numero: string;
  titulo: string;
  estado: string;
  prioridad: string;
  fechaAlta: Date;
  fechaVencimiento: Date;
  solicitante: string;
  unidad: string;
  descripcion: string;
}