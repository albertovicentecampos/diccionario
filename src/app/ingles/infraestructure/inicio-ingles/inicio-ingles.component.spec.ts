import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioInglesComponent } from './inicio-ingles.component';

describe('InicioInglesComponent', () => {
  let component: InicioInglesComponent;
  let fixture: ComponentFixture<InicioInglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioInglesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioInglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
