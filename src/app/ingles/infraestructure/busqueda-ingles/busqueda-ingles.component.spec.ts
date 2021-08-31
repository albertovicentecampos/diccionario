import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaInglesComponent } from './busqueda-ingles.component';

describe('BusquedaInglesComponent', () => {
  let component: BusquedaInglesComponent;
  let fixture: ComponentFixture<BusquedaInglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaInglesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaInglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
