import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaExpedientes } from './lista-expedientes';

describe('ListaExpedientes', () => {
  let component: ListaExpedientes;
  let fixture: ComponentFixture<ListaExpedientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaExpedientes],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaExpedientes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
