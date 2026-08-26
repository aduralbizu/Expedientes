import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-expedientes-listado-paginacion',
  imports: [],
  templateUrl: './expedientes-listado-paginacion.html',
  styleUrl: './expedientes-listado-paginacion.css',
})
export class ExpedientesListadoPaginacion {
  itemsPorPagina = input.required<number>(); //del padre los recibo
  totalItems = input.required<number>(); //del padre los recibo
  itemsPrevios = input.required<number>();

  cambioPagina = output<number>();

  paginaActual = computed(() =>
    Math.floor ((this.itemsPrevios() / this.itemsPorPagina()) + 1)
  );

  primeraPagina = computed(() => {
    return this.paginaActual() === 1;
  });

  totalPaginas = computed(() => {
    return Math.ceil(this.totalItems() / this.itemsPorPagina());
  });

  UltimaPagina = computed(() => {
    return this.paginaActual() === this.totalPaginas();
  });

  navegarAPagina(pagina: number) {
    this.cambioPagina.emit(pagina);
  }
}
