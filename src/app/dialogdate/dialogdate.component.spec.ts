import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogdateComponent } from './dialogdate.component';

describe('DialogdateComponent', () => {
  let component: DialogdateComponent;
  let fixture: ComponentFixture<DialogdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
