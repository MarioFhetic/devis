import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownSeachComponent } from './drop-down-seach.component';

describe('DropDownSeachComponent', () => {
  let component: DropDownSeachComponent;
  let fixture: ComponentFixture<DropDownSeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownSeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownSeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
