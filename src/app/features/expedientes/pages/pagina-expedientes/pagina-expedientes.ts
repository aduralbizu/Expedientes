import { Component, inject, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FiltroExpedientes } from "../../components/filtro-expedientes/filtro-expedientes";
import { ListaExpedientes } from "../../components/lista-expedientes/lista-expedientes";
import { ExpedientesService } from '../../services/expedientes-service/expedientes-service';
import { Expediente } from '../../models/expediente';
import { FiltrosExpedientes } from '../../models/filtros-expediente';

@Component({
  selector: 'app-pagina-expedientes',
  imports: [FiltroExpedientes, ListaExpedientes],
  templateUrl: './pagina-expedientes.html',
  styleUrl: './pagina-expedientes.css',
})
export class PaginaExpedientes implements OnInit {
  router = inject(Router);
  expedientesService = inject(ExpedientesService);

  nombre = input<string>();
  expedientes: Expediente[] = [];
  filtros: FiltrosExpedientes = {
    numero: '',
    estado: '',
    prioridad: '',
    fechaDesde: '',
    fechaHasta: ''
  };

  ngOnInit(): void {
    this.expedientesService.obtenerExpedientes().subscribe(expedientes => {
      this.expedientes = expedientes;
    });
  }

  

  getlistaexpedientes(): Expediente[] {
    const numero = this.filtros.numero || this.nombre() || '';
    const fechaDesde = this.filtros.fechaDesde
      ? new Date(`${this.filtros.fechaDesde}T00:00:00`)
      : null;
    const fechaHasta = this.filtros.fechaHasta
      ? new Date(`${this.filtros.fechaHasta}T23:59:59`)
      : null;

    return this.expedientes.filter(expediente =>
      expediente.numero.toLowerCase().includes(numero.toLowerCase()) &&
      (!this.filtros.estado || expediente.estado === this.filtros.estado) &&
      (!this.filtros.prioridad || expediente.prioridad === this.filtros.prioridad) &&
      (!fechaDesde || expediente.fechaAlta >= fechaDesde) &&
      (!fechaHasta || expediente.fechaAlta <= fechaHasta)
    );
  }

  filtraExpedientes(filtros: FiltrosExpedientes) {
    this.filtros = filtros;

    this.router.navigate(['/expedientes'], {
      queryParams: {
        nombre: filtros.numero || null
      }
    });
  }

  seleccionDeCliente(expediente: Expediente) {
    this.router.navigate(['/expedientes', expediente.numero]);
  }
}
