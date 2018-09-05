import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
//main
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
//store
import { StoreHomeComponent } from './store/store-home/store-home.component';
import { ProductosComponent } from 'src/app/store/productos/productos.component';
import { AuditoriasStockComponent } from 'src/app/store/auditorias-stock/auditorias-stock.component';
import { PedidosComponent } from 'src/app/store/pedidos/pedidos.component';
//deposito
import { DepositoHomeComponent } from 'src/app/deposito/deposito-home/deposito-home.component';
import { PlanillaCargaComponent } from 'src/app/deposito/planilla-carga/planilla-carga.component';
import { ModificacionItemsNpComponent } from 'src/app/deposito/modificacion-items-np/modificacion-items-np.component';
import { FacturacionNpComponent } from 'src/app/deposito/facturacion-np/facturacion-np.component';
import { IngresoMercaderiaComponent } from 'src/app/deposito/ingreso-mercaderia/ingreso-mercaderia.component';

const appRoutes: Routes = [
  //main
  { path: '', component: DashboardComponent, data: { title: 'Xrp', idtool: 0 } },
  //store
  { path: 'store', component: StoreHomeComponent, data: { title: 'Store', idtool: 1207 } },
  { path: 'store/auditorias_stock', component: AuditoriasStockComponent, data: { title: 'Auditorias Stock', idtool: 1214, parent:1207 } },
  { path: 'store/productos', component: ProductosComponent, data: { title: 'Productos', idtool: 1213, parent:1207 } },
  { path: 'store/pedidos', component: PedidosComponent, data: { title: 'Preventas', idtool: 1223, parent:1207 } },
  //deposito
  { path: 'deposito', component: DepositoHomeComponent, data: { title: 'Deposito', idtool: 1208 } },
  { path: 'deposito/planilla_carga', component: PlanillaCargaComponent, data: { title: 'Planilla de Carga', idtool: 1210, parent:1208 } },
  { path: 'deposito/modificacion_items_np', component: ModificacionItemsNpComponent, data: { title: 'Modificación Items Np', idtool: 1211, parent:1208 } },
  { path: 'deposito/facturacion_np', component: FacturacionNpComponent, data: { title: 'Facturacion Np', idtool: 1212, parent:1208 } },
  { path: 'deposito/ingreso_mercaderia', component: IngresoMercaderiaComponent, data: { title: 'Ingreso Mercadería', idtool: 1224, parent:1208 } },
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}