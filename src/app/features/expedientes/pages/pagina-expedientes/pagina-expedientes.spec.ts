import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaExpedientes } from './pagina-expedientes';

describe('PaginaExpedientes', () => {
  let component: PaginaExpedientes;
  let fixture: ComponentFixture<PaginaExpedientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaExpedientes],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaExpedientes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
