import { Component, inject, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FiltroExpedientes } from "../../components/filtro-expedientes/filtro-expedientes";
import { ListaExpedientes } from "../../components/lista-expedientes/lista-expedientes";
import { ExpedientesService } from '../../services/expedientes-service/expedientes-service';
import { Expediente } from '../../models/expediente';

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

  ngOnInit(): void {
    this.expedientesService.obtenerExpedientes().subscribe(expedientes => {
      this.expedientes = expedientes;
    });
  }

  

  getlistaexpedientes(): Expediente[] {
    if (!this.nombre()) {
      return this.expedientes;
    }

    return this.expedientes.filter(expediente =>
      expediente.numero.toLowerCase().includes(this.nombre()!.toLowerCase())
    );
  }

  filtraExpedientes(filtro: string | null) {
    this.router.navigate(['/expedientes'], {
      queryParams: {
        nombre : filtro || null
      }
    });
  }

  seleccionDeCliente(expediente: Expediente) {
    this.router.navigate(['/expedientes', expediente.numero]);
  }
}
