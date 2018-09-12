import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { TranslateService } from '@ngx-translate/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public app: AppComponent, private translate: TranslateService) {}

  items: MenuItem[];

  async ngOnInit() {
    this.app.showMenuToggle = false;    

    this.translate.get('session').subscribe((sessionTools)=>{
      this.items = [];
      this.items.push({label: sessionTools.OPCIONES , icon: 'pi pi-fw pi-cog', command: (event) => {this.options()}});
      this.items.push({label: sessionTools.LOGOUT , icon: 'pi pi-fw pi-power-off', command: (event) => {this.logOut()}});
    })

    
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
