import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteeComponent } from './executee.component';

describe('ExecuteeComponent', () => {
  let component: ExecuteeComponent;
  let fixture: ComponentFixture<ExecuteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecuteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
