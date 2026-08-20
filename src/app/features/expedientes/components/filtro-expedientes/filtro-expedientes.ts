import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtro-expedientes',
  imports: [FormsModule],
  templateUrl: './filtro-expedientes.html',
  styleUrl: './filtro-expedientes.css',
})
export class FiltroExpedientes {
  
  filtroNumeroExpediente: string = '';

  filtroExpediente = output<string | null>();

  limpiar(){
    this.filtroNumeroExpediente = '';
    this.filtroExpediente.emit(null);
  }

  buscar(){
    this.filtroExpediente.emit(this.filtroNumeroExpediente);
  }
}
