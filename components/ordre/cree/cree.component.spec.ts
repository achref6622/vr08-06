import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeComponent } from './cree.component';

describe('CreeComponent', () => {
  let component: CreeComponent;
  let fixture: ComponentFixture<CreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
