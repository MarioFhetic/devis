import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImageCentreComponent } from './text-image-centre.component';

describe('TextImageCentreComponent', () => {
  let component: TextImageCentreComponent;
  let fixture: ComponentFixture<TextImageCentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextImageCentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextImageCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
