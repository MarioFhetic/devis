import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoComplementaireComponent } from './info-complementaire.component';

describe('InfoComplementaireComponent', () => {
  let component: InfoComplementaireComponent;
  let fixture: ComponentFixture<InfoComplementaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoComplementaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComplementaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
