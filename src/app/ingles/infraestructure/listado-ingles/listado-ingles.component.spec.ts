import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoInglesComponent } from './listado-ingles.component';

describe('ListadoInglesComponent', () => {
  let component: ListadoInglesComponent;
  let fixture: ComponentFixture<ListadoInglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoInglesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoInglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
