import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {
  router = inject(Router);

  login(){
    //mockeo autenticación de usuario
    this.router.navigate(['/expedientes']);
  }
}
