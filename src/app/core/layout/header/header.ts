import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  router = inject(Router);

  seHaIniciadoSesion = true;

  onNuevoExpediente() {
    this.router.navigate(['/expedientes/nuevo']);
  }

  onLogout() {
    this.seHaIniciadoSesion = false;
    this.router.navigate(['/login']);
  }

  onLogoClick() {
    this.router.navigate(['/expedientes']);
  }
}
