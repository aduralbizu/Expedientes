import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-header',
  imports: [FormsModule, MatToolbarModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  router = inject(Router);

  authService = inject(AuthService);

  autenticado = this.authService.estaAutenticado;
  esEditor = this.authService.esUsuarioEditor;
  nombreUsuarioAutenticado = this.authService.nombreUsuarioAutenticado;
  
  logout = output();

  onNuevoExpediente() {
    this.router.navigate(['/expedientes/nuevo']);
  }
  onLogoClick() {
    this.router.navigate(['/expedientes']);
  }
}
