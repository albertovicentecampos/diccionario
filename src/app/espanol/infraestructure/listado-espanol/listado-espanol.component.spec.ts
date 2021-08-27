import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEspanolComponent } from './listado-espanol.component';

describe('ListadoEspanolComponent', () => {
  let component: ListadoEspanolComponent;
  let fixture: ComponentFixture<ListadoEspanolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoEspanolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEspanolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
