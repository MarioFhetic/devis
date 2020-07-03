import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorefComponent } from './autoref.component';

describe('AutorefComponent', () => {
  let component: AutorefComponent;
  let fixture: ComponentFixture<AutorefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
