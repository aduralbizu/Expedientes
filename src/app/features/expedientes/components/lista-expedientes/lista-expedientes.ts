import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Expediente } from '../../models/expediente';

@Component({
  selector: 'app-lista-expedientes',
  imports: [DatePipe],
  templateUrl: './lista-expedientes.html',
  styleUrl: './lista-expedientes.css',
})
export class ListaExpedientes {
  expedientes = input<Expediente[]>([]);
}
