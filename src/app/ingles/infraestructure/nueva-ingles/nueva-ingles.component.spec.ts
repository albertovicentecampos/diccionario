import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaInglesComponent } from './nueva-ingles.component';

describe('NuevaInglesComponent', () => {
  let component: NuevaInglesComponent;
  let fixture: ComponentFixture<NuevaInglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaInglesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaInglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
