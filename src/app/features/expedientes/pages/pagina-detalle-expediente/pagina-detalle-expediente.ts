import { Component, input, computed, Signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EXPEDIENTES_MOCK } from '../../data/expedientes.mock';
import { Expediente } from '../../models/expediente';

@Component({
  selector: 'app-pagina-detalle-expediente',
  imports: [DatePipe],
  templateUrl: './pagina-detalle-expediente.html',
  styleUrl: './pagina-detalle-expediente.css',
})
export class PaginaDetalleExpediente {
  numero = input<string>();

  expediente: Signal<Expediente> = computed(() => {
    return EXPEDIENTES_MOCK.find(expediente => expediente.numero === this.numero())!;
  });
}
    