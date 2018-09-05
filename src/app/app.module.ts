import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//store
import { StoreModule } from './store/store.module';
// import { StoreHomeComponent } from './store/store-home/store-home.component';

import { DepositoModule } from './deposito/deposito.module';
// import { DepositoHomeComponent } from 'src/app/deposito/deposito-home/deposito-home.component';

//main
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
//primeng
import { ButtonModule } from 'primeng/components/button/button';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    StoreModule,
    DepositoModule,
    ButtonModule,
    MenuModule,
    CardModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
