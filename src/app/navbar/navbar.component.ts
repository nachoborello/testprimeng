import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public app: AppComponent) { }

  items: MenuItem[];

  ngOnInit() {
    this.app.showMenuToggle = false;    

    this.items = [
      {label: 'Opciones', icon: 'pi pi-fw pi-cog', command: (event) => {this.options()},
      {label: 'Cerrar Sesion', icon: 'pi pi-fw pi-power-off', command: (event) => {this.logOut()}},
    ];
  }

  toggleSideBar() {
    this.app.showSideBar = !this.app.showSideBar;
  }

  options() {
    alert("Opciones");
  }

  logOut() {
    alert("logOut");
  }

}
