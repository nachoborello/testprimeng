import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { MenuService } from '../services/menu.service';
import { AppComponent } from 'src/app/app.component';

import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private translate: TranslateService,private menus:MenuService, public router: Router, public app: AppComponent, public location: Location) { 
    router.events.subscribe((e) => {
      if(e instanceof ActivationEnd){
        let data = e.snapshot.data;
        this.currentidtool = data.idtool;
        if(data.parent != undefined){
          this.currentparent = data.parent;
        }else{
          this.currentparent = this.currentidtool;
        }

        this.app.showSideBar = false;
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

  userActions: MenuItem[] = [];
  appurl;
  currentparent;
  currentidtool;
  tools = [];

  ngOnInit(){
    this.translate.get('session').subscribe((sessionTools)=>{
      this.userActions = [];
      this.userActions.push({label: sessionTools.OPCIONES , icon: 'pi pi-fw pi-cog', command: (event) => {this.options()}});
      this.userActions.push({label: sessionTools.LOGOUT , icon: 'pi pi-fw pi-power-off', command: (event) => {this.logOut()}});
    })
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
