import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreHomeComponent } from './store-home/store-home.component';
import { ProductosComponent } from './productos/productos.component';
import { AuditoriasStockComponent } from './auditorias-stock/auditorias-stock.component';
import { PedidosComponent } from './pedidos/pedidos.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StoreHomeComponent, ProductosComponent, AuditoriasStockComponent, PedidosComponent]
})
export class StoreModule { }
