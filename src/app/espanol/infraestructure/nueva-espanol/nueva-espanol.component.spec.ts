import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaEspanolComponent } from './nueva-espanol.component';

describe('NuevaEspanolComponent', () => {
  let component: NuevaEspanolComponent;
  let fixture: ComponentFixture<NuevaEspanolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaEspanolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaEspanolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
