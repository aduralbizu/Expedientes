import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroExpedientes } from './filtro-expedientes';

describe('FiltroExpedientes', () => {
  let component: FiltroExpedientes;
  let fixture: ComponentFixture<FiltroExpedientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroExpedientes],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltroExpedientes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
