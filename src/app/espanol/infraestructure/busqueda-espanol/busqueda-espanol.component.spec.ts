import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaEspanolComponent } from './busqueda-espanol.component';

describe('BusquedaEspanolComponent', () => {
  let component: BusquedaEspanolComponent;
  let fixture: ComponentFixture<BusquedaEspanolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaEspanolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaEspanolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
