import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulebasicComponent } from './formulebasic.component';

describe('FormulebasicComponent', () => {
  let component: FormulebasicComponent;
  let fixture: ComponentFixture<FormulebasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulebasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulebasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
