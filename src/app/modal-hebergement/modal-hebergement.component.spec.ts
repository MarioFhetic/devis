import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHebergementComponent } from './modal-hebergement.component';

describe('ModalHebergementComponent', () => {
  let component: ModalHebergementComponent;
  let fixture: ComponentFixture<ModalHebergementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHebergementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHebergementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
