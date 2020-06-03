import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalhebergementdoubleComponent } from './modalhebergementdouble.component';

describe('ModalhebergementdoubleComponent', () => {
  let component: ModalhebergementdoubleComponent;
  let fixture: ComponentFixture<ModalhebergementdoubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalhebergementdoubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalhebergementdoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
