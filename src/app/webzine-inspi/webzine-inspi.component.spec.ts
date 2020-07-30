import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebzineInspiComponent } from './webzine-inspi.component';

describe('WebzineInspiComponent', () => {
  let component: WebzineInspiComponent;
  let fixture: ComponentFixture<WebzineInspiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebzineInspiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebzineInspiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
