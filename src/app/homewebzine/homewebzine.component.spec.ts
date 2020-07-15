import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomewebzineComponent } from './homewebzine.component';

describe('HomewebzineComponent', () => {
  let component: HomewebzineComponent;
  let fixture: ComponentFixture<HomewebzineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomewebzineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomewebzineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
