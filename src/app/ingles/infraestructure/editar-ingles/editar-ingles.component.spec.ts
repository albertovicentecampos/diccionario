import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInglesComponent } from './editar-ingles.component';

describe('EditarInglesComponent', () => {
  let component: EditarInglesComponent;
  let fixture: ComponentFixture<EditarInglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarInglesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
