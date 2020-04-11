import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichelieuComponent } from './fichelieu.component';

describe('FichelieuComponent', () => {
  let component: FichelieuComponent;
  let fixture: ComponentFixture<FichelieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichelieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichelieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
