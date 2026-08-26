import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedientesListadoPaginacion } from './expedientes-listado-paginacion';

describe('ExpedientesListadoPaginacion', () => {
  let component: ExpedientesListadoPaginacion;
  let fixture: ComponentFixture<ExpedientesListadoPaginacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpedientesListadoPaginacion],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpedientesListadoPaginacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
