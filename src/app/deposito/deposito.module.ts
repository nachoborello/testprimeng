import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanillaCargaComponent } from './planilla-carga/planilla-carga.component';
import { ModificacionItemsNpComponent } from './modificacion-items-np/modificacion-items-np.component';
import { FacturacionNpComponent } from './facturacion-np/facturacion-np.component';
import { IngresoMercaderiaComponent } from './ingreso-mercaderia/ingreso-mercaderia.component';
import { DepositoHomeComponent } from './deposito-home/deposito-home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlanillaCargaComponent, ModificacionItemsNpComponent, FacturacionNpComponent, IngresoMercaderiaComponent, DepositoHomeComponent]
})
export class DepositoModule { }
