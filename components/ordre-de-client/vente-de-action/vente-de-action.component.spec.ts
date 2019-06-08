import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteDeActionComponent } from './vente-de-action.component';

describe('VenteDeActionComponent', () => {
  let component: VenteDeActionComponent;
  let fixture: ComponentFixture<VenteDeActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenteDeActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteDeActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
