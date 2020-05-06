import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogbudgetComponent } from './dialogbudget.component';

describe('DialogbudgetComponent', () => {
  let component: DialogbudgetComponent;
  let fixture: ComponentFixture<DialogbudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogbudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogbudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
