import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { App } from '../classes/App';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private menus: MenuService, public app: AppComponent) { }

  menu:App[];

  async ngOnInit(){
      this.app.showMenuToggle = false;
      this.menu = await this.menus.getMenu();
  }  

}
