import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebzineActuComponent } from './webzine-actu.component';

describe('WebzineActuComponent', () => {
  let component: WebzineActuComponent;
  let fixture: ComponentFixture<WebzineActuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebzineActuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebzineActuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
