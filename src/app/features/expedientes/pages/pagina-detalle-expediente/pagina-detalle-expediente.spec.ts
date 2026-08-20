import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDetalleExpediente } from './pagina-detalle-expediente';

describe('PaginaDetalleExpediente', () => {
  let component: PaginaDetalleExpediente;
  let fixture: ComponentFixture<PaginaDetalleExpediente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaDetalleExpediente],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaDetalleExpediente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
