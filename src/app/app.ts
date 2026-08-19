import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/layout/header/header';
import { Footer } from './core/layout/footer/footer';
import { Login } from './features/login/login';
import { ListaExpedientes } from './features/expedientes/components/lista-expedientes/lista-expedientes';
import { FormularioExpedientes } from './features/expedientes/components/formulario-expedientes/formulario-expedientes';
import { FiltroExpedientes } from "./features/expedientes/components/filtro-expedientes/filtro-expedientes";
import { PaginaExpedientes } from "./features/expedientes/pages/pagina-expedientes/pagina-expedientes";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Login, ListaExpedientes, FormularioExpedientes, FiltroExpedientes, PaginaExpedientes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('expedientes');
}
