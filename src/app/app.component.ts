import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { App, Tool } from './classes/App';
import { MenuService } from './services/menu.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
    constructor(private menus: MenuService, private route: ActivatedRoute, private translate: TranslateService){
        translate.setDefaultLang('es');
        translate.use('es');
    }
 
    showMenuToggle = false;
    showSideBar = false;
    menu:App[];

    async ngOnInit(){
        this.menu = await this.menus.getMenu();
        
    }  
}
