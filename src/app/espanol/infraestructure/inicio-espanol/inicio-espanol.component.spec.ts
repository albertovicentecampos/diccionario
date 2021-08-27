import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioEspanolComponent } from './inicio-espanol.component';

describe('InicioEspanolComponent', () => {
  let component: InicioEspanolComponent;
  let fixture: ComponentFixture<InicioEspanolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioEspanolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioEspanolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
