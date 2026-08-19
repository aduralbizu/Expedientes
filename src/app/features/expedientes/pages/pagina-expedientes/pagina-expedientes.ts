import { Component } from '@angular/core';
import { FiltroExpedientes } from "../../components/filtro-expedientes/filtro-expedientes";
import { ListaExpedientes } from "../../components/lista-expedientes/lista-expedientes";
import { Expediente } from "../../models/expediente";

@Component({
  selector: 'app-pagina-expedientes',
  imports: [FiltroExpedientes, ListaExpedientes],
  templateUrl: './pagina-expedientes.html',
  styleUrl: './pagina-expedientes.css',
})
export class PaginaExpedientes {
  expedientes : Expediente[] = [
    {
      numero: "EXP-2023-000123",
      titulo: "Solicitud inicial de estudio",
      estado: "Abierto",
      prioridad: "Media",
      fechaAlta: new Date("2023-01-01"),
      fechaVencimiento: new Date("2023-02-01"),
      Solicitante: "Juan Pérez",
      Unidad: "Unidad A",
      descripcion: "Descripción del expediente 1"
    },
    {
      numero: "EXP-2023-000124",
      titulo: "Revisión contrato",
      estado: "Cerrado",
      prioridad: "Alta",
      fechaAlta: new Date("2023-01-15"),
      fechaVencimiento: new Date("2023-03-01"),
      Solicitante: "María López",
      Unidad: "Unidad B",
      descripcion: "Descripción del expediente 2"
    },
    {
      numero: "EXP-2023-000125",
      titulo: "Alta de proveedor",
      estado: "En trámite",
      prioridad: "Baja",
      fechaAlta: new Date("2023-02-03"),
      fechaVencimiento: new Date("2023-04-10"),
      Solicitante: "Carlos Ruiz",
      Unidad: "Unidad C",
      descripcion: "Alta de nuevo proveedor en el sistema"
    },
    {
      numero: "EXP-2023-000126",
      titulo: "Reclamación de facturas",
      estado: "Abierto",
      prioridad: "Alta",
      fechaAlta: new Date("2023-02-20"),
      fechaVencimiento: new Date("2023-03-25"),
      Solicitante: "Ana Torres",
      Unidad: "Unidad A",
      descripcion: "Reclamación por facturas pendientes de pago"
    },
    {
      numero: "EXP-2023-000127",
      titulo: "Solicitud de licencia de obra",
      estado: "En trámite",
      prioridad: "Media",
      fechaAlta: new Date("2023-03-05"),
      fechaVencimiento: new Date("2023-06-05"),
      Solicitante: "Pedro Gómez",
      Unidad: "Unidad D",
      descripcion: "Licencia para obra menor en local comercial"
    },
    {
      numero: "EXP-2023-000128",
      titulo: "Auditoría interna anual",
      estado: "Cerrado",
      prioridad: "Media",
      fechaAlta: new Date("2023-03-18"),
      fechaVencimiento: new Date("2023-05-18"),
      Solicitante: "Lucía Martín",
      Unidad: "Unidad B",
      descripcion: "Revisión de procedimientos internos del ejercicio"
    },
    {
      numero: "EXP-2023-000129",
      titulo: "Renovación de contrato de mantenimiento",
      estado: "Abierto",
      prioridad: "Baja",
      fechaAlta: new Date("2023-04-02"),
      fechaVencimiento: new Date("2023-07-02"),
      Solicitante: "Javier Sanz",
      Unidad: "Unidad C",
      descripcion: "Renovación anual del contrato de mantenimiento"
    },
    {
      numero: "EXP-2023-000130",
      titulo: "Incidencia informática crítica",
      estado: "En trámite",
      prioridad: "Alta",
      fechaAlta: new Date("2023-04-21"),
      fechaVencimiento: new Date("2023-05-05"),
      Solicitante: "Elena Navarro",
      Unidad: "Unidad E",
      descripcion: "Caída del servicio de expedientes en producción"
    },
    {
      numero: "EXP-2023-000131",
      titulo: "Solicitud de subvención",
      estado: "Abierto",
      prioridad: "Media",
      fechaAlta: new Date("2023-05-09"),
      fechaVencimiento: new Date("2023-09-09"),
      Solicitante: "Miguel Ángel Díaz",
      Unidad: "Unidad A",
      descripcion: "Subvención para proyecto de digitalización"
    }
  ];      
}
