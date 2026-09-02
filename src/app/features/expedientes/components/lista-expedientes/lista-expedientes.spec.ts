import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';

import { ListaExpedientes } from './lista-expedientes';
import { AuthService } from '../../../../core/services/auth-service';
import { Expediente } from '../../models/expediente';

describe('ListaExpedientes', () => {
  let component: ListaExpedientes;
  let fixture: ComponentFixture<ListaExpedientes>;
  let esEditor: ReturnType<typeof signal<boolean>>;

  const expediente: Expediente = {
    numero: 'EXP-2026-001',
    titulo: 'Expediente de prueba',
    estado: 'abierto',
    prioridad: 'alta',
    fechaAlta: new Date('2026-01-15'),
    fechaVencimiento: new Date('2026-09-30'),
    solicitante: 'Usuario de prueba',
    unidad: 'Pruebas',
    descripcion: 'Expediente para probar la tabla',
  };

  beforeEach(async () => {
    esEditor = signal(false);

    await TestBed.configureTestingModule({
      imports: [ListaExpedientes],
      providers: [
        {
          provide: AuthService,
          useValue: { esUsuarioEditor: esEditor },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaExpedientes);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('respuestaExpedientes', [expediente]);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('hides actions for a reader', () => {
    expect(fixture.nativeElement.textContent).not.toContain('Acciones');
    expect(fixture.nativeElement.querySelector('.btn-editar')).toBeNull();
  });

  it('shows actions for an editor', () => {
    esEditor.set(true);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Acciones');
    expect(fixture.nativeElement.querySelector('.btn-editar')).not.toBeNull();
  });
});
