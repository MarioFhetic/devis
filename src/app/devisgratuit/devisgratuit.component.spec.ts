import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisgratuitComponent } from './devisgratuit.component';

describe('DevisgratuitComponent', () => {
  let component: DevisgratuitComponent;
  let fixture: ComponentFixture<DevisgratuitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevisgratuitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisgratuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
