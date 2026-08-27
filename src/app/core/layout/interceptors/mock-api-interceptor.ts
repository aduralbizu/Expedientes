import {
  HttpInterceptorFn,
  HttpResponse
} from '@angular/common/http';

import { of } from 'rxjs';
import { Expediente } from '../../../features/expedientes/models/expediente';

const EXPEDIENTES_MOCK: Expediente[] = [
  {
    numero: 'EXP-2026-001',
    titulo: 'Solicitud de licencia de actividad',
    estado: 'abierto',
    prioridad: 'alta',
    fechaAlta: new Date('2026-01-15'),
    fechaVencimiento: new Date('2026-09-30'),
    solicitante: 'María García López',
    unidad: 'Urbanismo',
    descripcion: 'Solicitud de licencia para apertura de establecimiento comercial.'
  },
  {
    numero: 'EXP-2026-002',
    titulo: 'Renovación de contrato de mantenimiento',
    estado: 'en_proceso',
    prioridad: 'media',
    fechaAlta: new Date('2026-02-10'),
    fechaVencimiento: new Date('2026-10-15'),
    solicitante: 'Carlos Martínez Ruiz',
    unidad: 'Contratación',
    descripcion: 'Renovación del contrato anual de mantenimiento de instalaciones.'
  },
  {
    numero: 'EXP-2026-003',
    titulo: 'Subvención para actividad cultural',
    estado: 'cerrado',
    prioridad: 'baja',
    fechaAlta: new Date('2026-03-05'),
    fechaVencimiento: new Date('2026-06-30'),
    solicitante: 'Asociación Cultural Norte',
    unidad: 'Cultura',
    descripcion: 'Solicitud de subvención para la organización de actividades culturales.'
  },
  {
    numero: 'EXP-2026-004',
    titulo: 'Reclamación patrimonial',
    estado: 'en_proceso',
    prioridad: 'alta',
    fechaAlta: new Date('2026-04-22'),
    fechaVencimiento: new Date('2026-08-31'),
    solicitante: 'Laura Sánchez Pérez',
    unidad: 'Servicios Jurídicos',
    descripcion: 'Expediente de responsabilidad patrimonial por daños materiales.'
  },
  {
    numero: 'EXP-2026-005',
    titulo: 'Autorización de ocupación de vía pública',
    estado: 'abierto',
    prioridad: 'media',
    fechaAlta: new Date('2026-07-03'),
    fechaVencimiento: new Date('2026-09-15'),
    solicitante: 'Construcciones Navarra S.L.',
    unidad: 'Obras Públicas',
    descripcion: 'Solicitud para ocupación temporal de vía pública durante trabajos de reforma.'
  },
  {
    numero: 'EXP-2026-006',
    titulo: 'Inscripción en actividad formativa',
    estado: 'abierto',
    prioridad: 'baja',
    fechaAlta: new Date('2026-01-08'),
    fechaVencimiento: new Date('2026-05-30'),
    solicitante: 'Ana Romero Gil',
    unidad: 'Educación',
    descripcion: 'Solicitud de inscripción en un programa municipal de formación.'
  },
  {
    numero: 'EXP-2026-007',
    titulo: 'Adjudicación de servicio de limpieza',
    estado: 'en_proceso',
    prioridad: 'alta',
    fechaAlta: new Date('2026-01-20'),
    fechaVencimiento: new Date('2026-07-20'),
    solicitante: 'Servicios Integrales del Norte S.A.',
    unidad: 'Contratación',
    descripcion: 'Procedimiento de adjudicación del servicio de limpieza municipal.'
  },
  {
    numero: 'EXP-2026-008',
    titulo: 'Comunicación de obra menor',
    estado: 'cerrado',
    prioridad: 'media',
    fechaAlta: new Date('2026-01-27'),
    fechaVencimiento: new Date('2026-03-15'),
    solicitante: 'Javier Ortega Martin',
    unidad: 'Urbanismo',
    descripcion: 'Comunicación previa para la ejecución de una obra menor.'
  },
  {
    numero: 'EXP-2026-009',
    titulo: 'Solicitud de tarjeta de estacionamiento',
    estado: 'abierto',
    prioridad: 'media',
    fechaAlta: new Date('2026-02-03'),
    fechaVencimiento: new Date('2026-08-03'),
    solicitante: 'Lucia Navarro Perez',
    unidad: 'Movilidad',
    descripcion: 'Solicitud de tarjeta de estacionamiento para persona autorizada.'
  },
  {
    numero: 'EXP-2026-010',
    titulo: 'Licencia para terraza',
    estado: 'en_proceso',
    prioridad: 'alta',
    fechaAlta: new Date('2026-02-12'),
    fechaVencimiento: new Date('2026-04-30'),
    solicitante: 'Hosteleria Central S.L.',
    unidad: 'Comercio',
    descripcion: 'Solicitud de autorización para instalar una terraza en vía pública.'
  },
  {
    numero: 'EXP-2026-011',
    titulo: 'Ayuda para rehabilitación de vivienda',
    estado: 'abierto',
    prioridad: 'alta',
    fechaAlta: new Date('2026-02-19'),
    fechaVencimiento: new Date('2026-09-10'),
    solicitante: 'Pedro Alonso Vega',
    unidad: 'Vivienda',
    descripcion: 'Solicitud de ayuda destinada a obras de rehabilitación de vivienda.'
  },
  {
    numero: 'EXP-2026-012',
    titulo: 'Reserva de espacio para evento',
    estado: 'cerrado',
    prioridad: 'baja',
    fechaAlta: new Date('2026-02-26'),
    fechaVencimiento: new Date('2026-03-05'),
    solicitante: 'Asociacion Vecinal La Plaza',
    unidad: 'Participación Ciudadana',
    descripcion: 'Solicitud de reserva de un espacio municipal para una actividad vecinal.'
  },
  {
    numero: 'EXP-2026-013',
    titulo: 'Autorización de transporte especial',
    estado: 'en_proceso',
    prioridad: 'media',
    fechaAlta: new Date('2026-03-04'),
    fechaVencimiento: new Date('2026-06-15'),
    solicitante: 'Transportes Rivera S.L.',
    unidad: 'Movilidad',
    descripcion: 'Autorización para realizar un transporte especial por vías municipales.'
  },
  {
    numero: 'EXP-2026-014',
    titulo: 'Concesión de puesto en mercado',
    estado: 'abierto',
    prioridad: 'media',
    fechaAlta: new Date('2026-03-11'),
    fechaVencimiento: new Date('2026-10-01'),
    solicitante: 'Mercados del Centro C.B.',
    unidad: 'Comercio',
    descripcion: 'Solicitud de concesión de un puesto en el mercado municipal.'
  },
  {
    numero: 'EXP-2026-015',
    titulo: 'Informe de impacto ambiental',
    estado: 'en_proceso',
    prioridad: 'alta',
    fechaAlta: new Date('2026-03-18'),
    fechaVencimiento: new Date('2026-08-18'),
    solicitante: 'EcoProyectos Iberia S.A.',
    unidad: 'Medio Ambiente',
    descripcion: 'Tramitación de informe de impacto ambiental para un nuevo proyecto.'
  },
  {
    numero: 'EXP-2026-016',
    titulo: 'Bonificación del impuesto municipal',
    estado: 'cerrado',
    prioridad: 'baja',
    fechaAlta: new Date('2026-03-25'),
    fechaVencimiento: new Date('2026-05-25'),
    solicitante: 'Elena Molina Santos',
    unidad: 'Hacienda',
    descripcion: 'Solicitud de bonificación aplicada al impuesto municipal correspondiente.'
  },
  {
    numero: 'EXP-2026-017',
    titulo: 'Autorización de espectáculo público',
    estado: 'abierto',
    prioridad: 'alta',
    fechaAlta: new Date('2026-04-02'),
    fechaVencimiento: new Date('2026-06-20'),
    solicitante: 'Eventos Horizonte S.L.',
    unidad: 'Cultura',
    descripcion: 'Solicitud de autorización para la celebración de un espectáculo público.'
  },
  {
    numero: 'EXP-2026-018',
    titulo: 'Solicitud de acceso a información pública',
    estado: 'en_proceso',
    prioridad: 'media',
    fechaAlta: new Date('2026-04-09'),
    fechaVencimiento: new Date('2026-05-09'),
    solicitante: 'Rafael Dominguez Leon',
    unidad: 'Transparencia',
    descripcion: 'Solicitud de acceso a documentación de carácter público.'
  },
  {
    numero: 'EXP-2026-019',
    titulo: 'Mantenimiento de zona verde',
    estado: 'cerrado',
    prioridad: 'media',
    fechaAlta: new Date('2026-04-16'),
    fechaVencimiento: new Date('2026-06-16'),
    solicitante: 'Jardines Urbanos S.L.',
    unidad: 'Parques y Jardines',
    descripcion: 'Expediente de mantenimiento y mejora de una zona verde municipal.'
  },
  {
    numero: 'EXP-2026-020',
    titulo: 'Solicitud de ayuda al alquiler',
    estado: 'abierto',
    prioridad: 'alta',
    fechaAlta: new Date('2026-04-23'),
    fechaVencimiento: new Date('2026-11-15'),
    solicitante: 'Sonia Castillo Marin',
    unidad: 'Vivienda',
    descripcion: 'Solicitud de ayuda económica para el pago del alquiler de vivienda habitual.'
  },
  {
    numero: 'EXP-2026-021',
    titulo: 'Registro de asociación deportiva',
    estado: 'en_proceso',
    prioridad: 'baja',
    fechaAlta: new Date('2026-05-01'),
    fechaVencimiento: new Date('2026-07-01'),
    solicitante: 'Club Deportivo Alameda',
    unidad: 'Deportes',
    descripcion: 'Solicitud de inscripción de una asociación deportiva en el registro municipal.'
  },
  {
    numero: 'EXP-2026-022',
    titulo: 'Revisión de licencia de apertura',
    estado: 'abierto',
    prioridad: 'media',
    fechaAlta: new Date('2026-05-08'),
    fechaVencimiento: new Date('2026-08-08'),
    solicitante: 'Comercial Vega S.L.',
    unidad: 'Urbanismo',
    descripcion: 'Revisión de la documentación asociada a una licencia de apertura.'
  },
  {
    numero: 'EXP-2026-023',
    titulo: 'Campaña de prevención sanitaria',
    estado: 'cerrado',
    prioridad: 'alta',
    fechaAlta: new Date('2026-05-15'),
    fechaVencimiento: new Date('2026-06-01'),
    solicitante: 'Centro Salud Norte',
    unidad: 'Salud Pública',
    descripcion: 'Coordinación de una campaña municipal de prevención sanitaria.'
  },
  {
    numero: 'EXP-2026-024',
    titulo: 'Instalación de punto de recarga',
    estado: 'en_proceso',
    prioridad: 'alta',
    fechaAlta: new Date('2026-05-22'),
    fechaVencimiento: new Date('2026-09-22'),
    solicitante: 'Energia Limpia del Sur S.A.',
    unidad: 'Medio Ambiente',
    descripcion: 'Solicitud para instalar un punto de recarga de vehículos eléctricos.'
  },
  {
    numero: 'EXP-2026-025',
    titulo: 'Autorización de rodaje',
    estado: 'abierto',
    prioridad: 'baja',
    fechaAlta: new Date('2026-05-29'),
    fechaVencimiento: new Date('2026-07-15'),
    solicitante: 'Producciones Horizonte S.L.',
    unidad: 'Cultura',
    descripcion: 'Solicitud de autorización para realizar un rodaje en espacios municipales.'
  },
  {
    numero: 'EXP-2026-026',
    titulo: 'Reparación de alumbrado público',
    estado: 'en_proceso',
    prioridad: 'alta',
    fechaAlta: new Date('2026-06-05'),
    fechaVencimiento: new Date('2026-07-05'),
    solicitante: 'Comunidad de Propietarios Sol',
    unidad: 'Servicios Urbanos',
    descripcion: 'Solicitud de reparación de varios puntos de alumbrado público.'
  },
  {
    numero: 'EXP-2026-027',
    titulo: 'Participación en feria municipal',
    estado: 'cerrado',
    prioridad: 'media',
    fechaAlta: new Date('2026-06-12'),
    fechaVencimiento: new Date('2026-08-12'),
    solicitante: 'Artesanos Unidos',
    unidad: 'Promoción Económica',
    descripcion: 'Solicitud de participación con un puesto en la feria municipal.'
  },
  {
    numero: 'EXP-2026-028',
    titulo: 'Reserva de instalación deportiva',
    estado: 'abierto',
    prioridad: 'baja',
    fechaAlta: new Date('2026-06-19'),
    fechaVencimiento: new Date('2026-06-30'),
    solicitante: 'Asociacion Juvenil Horizonte',
    unidad: 'Deportes',
    descripcion: 'Solicitud de reserva de una instalación deportiva municipal.'
  },
  {
    numero: 'EXP-2026-029',
    titulo: 'Inspección de actividad comercial',
    estado: 'en_proceso',
    prioridad: 'media',
    fechaAlta: new Date('2026-06-26'),
    fechaVencimiento: new Date('2026-08-26'),
    solicitante: 'Inspecciones Municipales',
    unidad: 'Comercio',
    descripcion: 'Inspección ordinaria de una actividad comercial autorizada.'
  },
  {
    numero: 'EXP-2026-030',
    titulo: 'Solicitud de certificado urbanístico',
    estado: 'abierto',
    prioridad: 'media',
    fechaAlta: new Date('2026-07-03'),
    fechaVencimiento: new Date('2026-08-03'),
    solicitante: 'Nuria Prieto Campos',
    unidad: 'Urbanismo',
    descripcion: 'Solicitud de certificado sobre las condiciones urbanísticas de una parcela.'
  },
  {
    numero: 'EXP-2026-031',
    titulo: 'Programa de voluntariado municipal',
    estado: 'cerrado',
    prioridad: 'baja',
    fechaAlta: new Date('2026-07-10'),
    fechaVencimiento: new Date('2026-08-10'),
    solicitante: 'Red de Voluntariado Local',
    unidad: 'Servicios Sociales',
    descripcion: 'Alta de una entidad colaboradora en el programa de voluntariado municipal.'
  },
  {
    numero: 'EXP-2026-032',
    titulo: 'Acondicionamiento de camino rural',
    estado: 'en_proceso',
    prioridad: 'alta',
    fechaAlta: new Date('2026-07-17'),
    fechaVencimiento: new Date('2026-10-17'),
    solicitante: 'Cooperativa Campo Verde',
    unidad: 'Obras Públicas',
    descripcion: 'Solicitud de acondicionamiento y mejora de un camino rural.'
  },
  {
    numero: 'EXP-2026-033',
    titulo: 'Ayuda para material escolar',
    estado: 'abierto',
    prioridad: 'alta',
    fechaAlta: new Date('2026-07-24'),
    fechaVencimiento: new Date('2026-09-05'),
    solicitante: 'Beatriz Fuentes Ruiz',
    unidad: 'Educación',
    descripcion: 'Solicitud de ayuda para la adquisición de material escolar.'
  },
  {
    numero: 'EXP-2026-034',
    titulo: 'Autorización de poda de arbolado',
    estado: 'en_proceso',
    prioridad: 'media',
    fechaAlta: new Date('2026-07-31'),
    fechaVencimiento: new Date('2026-09-30'),
    solicitante: 'Comunidad Residencial Los Olivos',
    unidad: 'Parques y Jardines',
    descripcion: 'Solicitud de autorización para la poda de arbolado privado.'
  },
  {
    numero: 'EXP-2026-035',
    titulo: 'Convenio de colaboración cultural',
    estado: 'abierto',
    prioridad: 'baja',
    fechaAlta: new Date('2026-08-07'),
    fechaVencimiento: new Date('2026-11-30'),
    solicitante: 'Fundacion Arte y Ciudad',
    unidad: 'Cultura',
    descripcion: 'Tramitación de un convenio de colaboración para actividades culturales.'
  }
];

export const mockApiInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.method === 'GET' && req.url === '/api/expedientes') {
    const limit = Math.max(Number(req.params.get('limit')) || 8, 1);
    const skip = Math.max(Number(req.params.get('skip')) || 0, 0);

    return of(
      new HttpResponse({
        status: 200,
        body: {
          expedientes: EXPEDIENTES_MOCK.slice(skip, skip + limit),
          total: EXPEDIENTES_MOCK.length,
          skip,
          limit
        }
      })
    );

  }

  const expedienteDetalleMatch = req.method === 'GET'
    ? req.url.match(/^\/api\/expedientes\/([^/]+)$/)
    : null;

  if (expedienteDetalleMatch) {

    const numero = expedienteDetalleMatch[1];
    const expediente = EXPEDIENTES_MOCK.find(exp => exp.numero === numero);

    if (!expediente) {
      return of(
        new HttpResponse({
          status: 404,
          body: null
        })
      );
    }

    return of(
      new HttpResponse({
        status: 200,
        body: expediente
      })
    );

  }

  return next(req);
};