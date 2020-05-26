import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuleavanceComponent } from './formuleavance.component';

describe('FormuleavanceComponent', () => {
  let component: FormuleavanceComponent;
  let fixture: ComponentFixture<FormuleavanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormuleavanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormuleavanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
