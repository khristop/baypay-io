import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaypayComponent } from './baypay.component';

describe('BaypayComponent', () => {
  let component: BaypayComponent;
  let fixture: ComponentFixture<BaypayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaypayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaypayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
