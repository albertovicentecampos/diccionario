import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEspanolComponent } from './lista-espanol.component';

describe('ListaEspanolComponent', () => {
  let component: ListaEspanolComponent;
  let fixture: ComponentFixture<ListaEspanolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEspanolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEspanolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
