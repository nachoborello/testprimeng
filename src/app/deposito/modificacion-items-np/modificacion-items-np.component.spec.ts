import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionItemsNpComponent } from './modificacion-items-np.component';

describe('ModificacionItemsNpComponent', () => {
  let component: ModificacionItemsNpComponent;
  let fixture: ComponentFixture<ModificacionItemsNpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificacionItemsNpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificacionItemsNpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
