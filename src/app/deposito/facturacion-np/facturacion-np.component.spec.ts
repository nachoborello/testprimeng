import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacionNpComponent } from './facturacion-np.component';

describe('FacturacionNpComponent', () => {
  let component: FacturacionNpComponent;
  let fixture: ComponentFixture<FacturacionNpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturacionNpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturacionNpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
