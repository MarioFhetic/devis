import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoComplementaire2Component } from './info-complementaire2.component';

describe('InfoComplementaire2Component', () => {
  let component: InfoComplementaire2Component;
  let fixture: ComponentFixture<InfoComplementaire2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoComplementaire2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComplementaire2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
