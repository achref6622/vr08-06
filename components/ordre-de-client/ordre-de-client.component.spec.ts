import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdreDeClientComponent } from './ordre-de-client.component';

describe('OrdreDeClientComponent', () => {
  let component: OrdreDeClientComponent;
  let fixture: ComponentFixture<OrdreDeClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdreDeClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdreDeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
