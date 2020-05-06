import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogparticipantsComponent } from './dialogparticipants.component';

describe('DialogparticipantsComponent', () => {
  let component: DialogparticipantsComponent;
  let fixture: ComponentFixture<DialogparticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogparticipantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogparticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
