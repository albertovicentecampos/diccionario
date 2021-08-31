import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInglesComponent } from './lista-ingles.component';

describe('ListaInglesComponent', () => {
  let component: ListaInglesComponent;
  let fixture: ComponentFixture<ListaInglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaInglesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaInglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
