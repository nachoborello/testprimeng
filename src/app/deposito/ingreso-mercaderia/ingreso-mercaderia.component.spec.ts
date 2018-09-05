import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoMercaderiaComponent } from './ingreso-mercaderia.component';

describe('IngresoMercaderiaComponent', () => {
  let component: IngresoMercaderiaComponent;
  let fixture: ComponentFixture<IngresoMercaderiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoMercaderiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoMercaderiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
