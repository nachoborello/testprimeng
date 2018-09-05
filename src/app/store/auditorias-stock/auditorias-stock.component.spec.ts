import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriasStockComponent } from './auditorias-stock.component';

describe('AuditoriasStockComponent', () => {
  let component: AuditoriasStockComponent;
  let fixture: ComponentFixture<AuditoriasStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditoriasStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriasStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
