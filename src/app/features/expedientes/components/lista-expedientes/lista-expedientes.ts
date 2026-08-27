import { Component, input, output, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Expediente } from '../../models/expediente';

type DireccionOrden = 'asc' | 'desc' | null;

// ciclo de estados al pulsar la cabecera: asc -> desc -> sin orden -> asc...
const SIGUIENTE_ORDEN: Record<string, DireccionOrden> = {
  asc: 'desc',
  desc: null,
  null: 'asc',
};

@Component({
  selector: 'app-lista-expedientes',
  imports: [DatePipe],
  templateUrl: './lista-expedientes.html',
  styleUrl: './lista-expedientes.css',
})
export class ListaExpedientes {
  respuestaExpedientes = input<Expediente[] | null>([]);
  productoSeleccionado = output<Expediente>();

  ordenarPorFechaAlta = output<DireccionOrden>();
  ordenFechaAlta = signal<DireccionOrden>(null);

  onOrdenarFechaAlta() {
    const siguiente = SIGUIENTE_ORDEN[String(this.ordenFechaAlta())];
    this.ordenFechaAlta.set(siguiente);
    this.ordenarPorFechaAlta.emit(siguiente);
  }

  onExpedienteClick(expediente: Expediente) {
    console.log('Expediente seleccionado:', expediente);
    this.productoSeleccionado.emit(expediente);  
  }
}

