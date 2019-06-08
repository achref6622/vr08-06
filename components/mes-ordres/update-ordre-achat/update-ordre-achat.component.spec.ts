import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrdreAchatComponent } from './update-ordre-achat.component';

describe('UpdateOrdreAchatComponent', () => {
  let component: UpdateOrdreAchatComponent;
  let fixture: ComponentFixture<UpdateOrdreAchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOrdreAchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrdreAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
