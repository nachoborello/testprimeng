import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoHomeComponent } from './deposito-home.component';

describe('DepositoHomeComponent', () => {
  let component: DepositoHomeComponent;
  let fixture: ComponentFixture<DepositoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
