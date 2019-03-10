import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetCoreCardsComponent } from './net-core-cards.component';

describe('NetCoreCardsComponent', () => {
  let component: NetCoreCardsComponent;
  let fixture: ComponentFixture<NetCoreCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetCoreCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetCoreCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
