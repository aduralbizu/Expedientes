import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form, FormField, required, minLength } from '@angular/forms/signals';
import { Router } from '@angular/router';

interface FormularioExpediente {
  numero: string;
  titulo: string;
  estado: string;
  prioridad: string;
  fechaAlta: string;
  fechaVencimiento: string;
  solicitante: string;
  unidad: string;
  descripcion: string;
}

@Component({
  selector: 'app-formulario-expedientes',
  imports: [FormsModule, FormField],
  templateUrl: './formulario-expedientes.html',
  styleUrl: './formulario-expedientes.css',
})
export class FormularioExpedientes {
  router = inject(Router);

  expedienteModel = signal({
    numero: '',
    titulo: '',
    estado: '',
    prioridad: '',
    fechaAlta: '',
    fechaVencimiento: '',
    solicitante: '',
    unidad: '',
    descripcion: '',
  });

  expedienteForm = form(this.expedienteModel, (schemaPath)=>{
    required(schemaPath.numero, {message: 'El número de expediente es obligatorio'});

    required(schemaPath.titulo, {message: 'El título es obligatorio'});
    minLength(schemaPath.titulo, 5, {message: 'El título debe tener al menos 5 caracteres'});
  });

  cancelar() {
    this.router.navigate(['/expedientes']);
  }

  crear() {
    // mockeo de creación: sin backend real, solo navega al listado
    console.log('Expediente a crear:', this.expedienteModel());
    this.router.navigate(['/expedientes']);
  }
}
