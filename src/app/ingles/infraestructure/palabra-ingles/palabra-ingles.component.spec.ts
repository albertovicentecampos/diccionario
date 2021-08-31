import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalabraInglesComponent } from './palabra-ingles.component';

describe('PalabraInglesComponent', () => {
  let component: PalabraInglesComponent;
  let fixture: ComponentFixture<PalabraInglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalabraInglesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalabraInglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
