import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEspanolComponent } from './editar-espanol.component';

describe('EditarEspanolComponent', () => {
  let component: EditarEspanolComponent;
  let fixture: ComponentFixture<EditarEspanolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEspanolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEspanolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
