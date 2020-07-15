import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestwidgetComponent } from './testwidget.component';

describe('TestwidgetComponent', () => {
  let component: TestwidgetComponent;
  let fixture: ComponentFixture<TestwidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestwidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
