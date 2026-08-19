import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioExpedientes } from './formulario-expedientes';

describe('FormularioExpedientes', () => {
  let component: FormularioExpedientes;
  let fixture: ComponentFixture<FormularioExpedientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioExpedientes],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioExpedientes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
