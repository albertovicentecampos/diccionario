import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalabraEspanolComponent } from './palabra-espanol.component';

describe('PalabraEspanolComponent', () => {
  let component: PalabraEspanolComponent;
  let fixture: ComponentFixture<PalabraEspanolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalabraEspanolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalabraEspanolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
