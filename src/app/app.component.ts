import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

import { MenuService } from './services/menu.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { App, Tool } from './classes/App';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
    constructor(private menus: MenuService, private route: ActivatedRoute){}
 
    showMenuToggle = false;
    showSideBar = false;
    menu:App[];

    async ngOnInit(){
        this.menu = await this.menus.getMenu();
    }  
}
