import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Login } from './login/login';
import { ListaExpedientes } from './lista-expedientes/lista-expedientes';
import { FormularioExpedientes } from './formulario-expedientes/formulario-expedientes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Login, ListaExpedientes, FormularioExpedientes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('expedientes');
}
