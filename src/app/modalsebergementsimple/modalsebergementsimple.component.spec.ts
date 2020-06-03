import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsebergementsimpleComponent } from './modalsebergementsimple.component';

describe('ModalsebergementsimpleComponent', () => {
  let component: ModalsebergementsimpleComponent;
  let fixture: ComponentFixture<ModalsebergementsimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsebergementsimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsebergementsimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
