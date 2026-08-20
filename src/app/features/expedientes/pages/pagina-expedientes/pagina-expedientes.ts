import { Component, computed, inject, input, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { FiltroExpedientes } from "../../components/filtro-expedientes/filtro-expedientes";
import { ListaExpedientes } from "../../components/lista-expedientes/lista-expedientes";
import { Expediente } from "../../models/expediente";
import { EXPEDIENTES_MOCK } from '../../data/expedientes.mock';

@Component({
  selector: 'app-pagina-expedientes',
  imports: [FiltroExpedientes, ListaExpedientes],
  templateUrl: './pagina-expedientes.html',
  styleUrl: './pagina-expedientes.css',
})
export class PaginaExpedientes {
  router = inject(Router);

  nombre = input<string>();

  listaexpedientes : Signal<Expediente[]> = computed(() => {
    if (!this.nombre()) {
      console.log('no hay filtro');
      return EXPEDIENTES_MOCK;
    }

    return EXPEDIENTES_MOCK.filter(expediente => expediente.numero.toLowerCase().includes(this.nombre()!.toLowerCase()));
  });

  filtraExpedientes(filtro: string | null) {
    this.router.navigate(['/expedientes'], {
      queryParams: {
        nombre : filtro || null
      }
    });
  }   
}
