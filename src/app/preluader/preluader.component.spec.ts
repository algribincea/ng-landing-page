import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreluaderComponent } from './preluader.component';

describe('PreluaderComponent', () => {
  let component: PreluaderComponent;
  let fixture: ComponentFixture<PreluaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreluaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreluaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
