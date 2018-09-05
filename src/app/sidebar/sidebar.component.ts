import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MenuService } from '../services/menu.service';
import { Router, ActivationEnd } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { MenuItem } from 'primeng/components/common/menuitem';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private menus:MenuService, public router: Router, public app: AppComponent, public location: Location) { 
    router.events.subscribe((e) => {
      // see also 
      if(e instanceof ActivationEnd){
        let data = e.snapshot.data;
        this.currentidtool = data.idtool;
        if(data.parent != undefined){
          this.currentparent = data.parent;
        }else{
          this.currentparent = this.currentidtool;
        }

        this.app.showSideBar = false;
        console.log(this.currentidtool);
        if(this.currentidtool != 0){
          this.app.showMenuToggle = true;
          this.updateMenu();
        }
        else{
          this.app.showMenuToggle = false;
        }
      }
    });

  }

  userActions: MenuItem[];
  appurl;
  currentparent;
  currentidtool;
  tools = [];

  async ngOnInit(){
    this.userActions = [
      {label: 'Opciones', icon: 'pi pi-fw pi-cog', command: (event) => {this.options()},
      {label: 'Cerrar Sesion', icon: 'pi pi-fw pi-power-off', command: (event) => {this.logOut()}}
    ];
    
  }

  async updateMenu(){
    let appdata = await this.menus.getAppData(this.currentparent)
    if(appdata != undefined){
      this.appurl = appdata.url;
      this.tools = appdata.options;
    }
  }

  toggleSideBar() {
    this.app.showSideBar = !this.app.showSideBar;
  }

  goBack() {
    this.location.back();
  }

  options() {
    alert("Opciones");
  }

  logOut() {
    alert("logOut");
  }

}
