import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { FiltroExpedientes } from "../../components/filtro-expedientes/filtro-expedientes";
import { ListaExpedientes } from "../../components/lista-expedientes/lista-expedientes";
import { ExpedientesService } from '../../services/expedientes-service/expedientes-service';
import { Expediente } from '../../models/expediente';
import { FiltrosExpedientes } from '../../models/filtros-expediente';
import { ExpedientesListadoPaginacion } from "../../components/expedientes-listado-paginacion/expedientes-listado-paginacion";
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-pagina-expedientes',
  imports: [FiltroExpedientes, ListaExpedientes, ExpedientesListadoPaginacion],
  templateUrl: './pagina-expedientes.html',
  styleUrl: './pagina-expedientes.css',
})
export class PaginaExpedientes {
  router = inject(Router);
  expedientesService = inject(ExpedientesService);

  nombre = input<string>();

  itemsPorPagina = 8;
  pagina = input<number>();

  filtros: FiltrosExpedientes = {
    numero: '',
    estado: '',
    prioridad: '',
    fechaDesde: '',
    fechaHasta: ''
  };

  itemsPrevios = 0;

  ordenFechaAlta: 'asc'| 'desc' | null = null;

  ordenarPorFechaAlta(direccion: 'asc' | 'desc' | null) {
    this.ordenFechaAlta = direccion;
  }

  recursoCambioFiltro = rxResource({
    params: () => ({
      pagina: this.pagina() ?? 1
    }),
    stream: ({ params }) => {
      const skip = (params.pagina - 1) * this.itemsPorPagina;
      return this.expedientesService.obtenerExpedientes(this.itemsPorPagina, skip);
    }
  });

  respuestaRecursos = this.recursoCambioFiltro.value;

  cambioPagina(pagina: number) {
    this.router.navigate(['/expedientes'], {
      queryParams: { pagina: pagina },
      queryParamsHandling: 'merge'
    });
  }

  seleccionDeCliente(expediente: Expediente) {
    this.router.navigate(['/expedientes', expediente.numero]);
  }

  getlistaexpedientes(): Expediente[] {
    const expedientes = this.respuestaRecursos()?.expedientes ?? [];
    const numero = this.filtros.numero || this.nombre() || '';
    const fechaDesde = this.filtros.fechaDesde
      ? new Date(`${this.filtros.fechaDesde}T00:00:00`)
      : null;
    const fechaHasta = this.filtros.fechaHasta
      ? new Date(`${this.filtros.fechaHasta}T23:59:59`)
      : null;

    const resultado = expedientes.filter(expediente =>
      expediente.numero.toLowerCase().includes(numero.toLowerCase()) &&
      (!this.filtros.estado || expediente.estado === this.filtros.estado) &&
      (!this.filtros.prioridad || expediente.prioridad === this.filtros.prioridad) &&
      (!fechaDesde || expediente.fechaAlta >= fechaDesde) &&
      (!fechaHasta || expediente.fechaAlta <= fechaHasta)
    );

    //ordenado (if needed)
    if (this.ordenFechaAlta){
      resultado.sort((a, b) => {
        const diff = a.fechaAlta.getTime() - b.fechaAlta.getTime();
        return this.ordenFechaAlta === 'asc' ? diff : -diff;
      });
    }

    return resultado;
  }

  filtraExpedientes(filtros: FiltrosExpedientes) {
    this.filtros = filtros;

    this.router.navigate(['/expedientes'], {
      queryParams: {
        nombre: filtros.numero || null,
        estado: filtros.estado || null,
        prioridad: filtros.prioridad || null,
        fechaDesde: filtros.fechaDesde || null,
        fechaHasta: filtros.fechaHasta || null,   
      }
    });
  }
}
