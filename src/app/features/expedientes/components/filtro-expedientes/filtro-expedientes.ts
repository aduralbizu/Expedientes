import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FiltrosExpedientes } from '../../models/filtros-expediente';

@Component({
  selector: 'app-filtro-expedientes',
  imports: [FormsModule],
  templateUrl: './filtro-expedientes.html',
  styleUrl: './filtro-expedientes.css',
})
export class FiltroExpedientes {
  filtrosExpediente = output<FiltrosExpedientes>();

  filtros: FiltrosExpedientes = {
    numero: '',
    estado: '',
    prioridad: '',
    fechaDesde: '',
    fechaHasta: ''
  };

  limpiar(){
    this.filtros = {
      numero: '',
      estado: '',
      prioridad: '',
      fechaDesde: '',
      fechaHasta: ''
    };
    this.filtrosExpediente.emit(this.filtros);
  }

  buscar(){
    this.filtrosExpediente.emit(this.filtros);
  }
}
