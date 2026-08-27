import { Component, input, computed, Signal, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Expediente } from '../../models/expediente';
import { ExpedientesService } from '../../services/expedientes-service/expedientes-service';

@Component({
  selector: 'app-pagina-detalle-expediente',
  imports: [DatePipe],
  templateUrl: './pagina-detalle-expediente.html',
  styleUrl: './pagina-detalle-expediente.css',
})
export class PaginaDetalleExpediente {
  numero = input<string>();

  expedientesService = inject(ExpedientesService);

  expedientes: Expediente[] = [];

  ngOnInit(): void {
    this.expedientesService.obtenerExpediente(this.numero() ?? '').subscribe(expediente => {
      this.expedientes = [expediente];
    });
  }

  expediente: Signal<Expediente> = computed(() => {
    return this.expedientes.find(expediente => expediente.numero === this.numero())!;
  });

  // expediente: Signal<Expediente> = computed(() => {
  //   return EXPEDIENTES_MOCK.find(expediente => expediente.numero === this.numero())!;
  // });
}
    