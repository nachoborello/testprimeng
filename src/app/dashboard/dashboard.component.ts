import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { App } from '../classes/App';
import { AppComponent } from 'src/app/app.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private menus: MenuService, public app: AppComponent, private translate: TranslateService) { }

  title;
  id;
  menu:App[];
  langs = ['es','en'];
  lang;

  async ngOnInit(){
    this.title = "app";
    this.id = "introductionHeader";
    this.app.showMenuToggle = false;
    this.menu = await this.menus.getMenu();
    this.lang = this.translate.currentLang;
  }  

  cicleLang() {
    console.log("langChange")
    let id;
    if(this.langs.indexOf(this.translate.currentLang) < this.langs.length-1){
      id = this.langs.indexOf(this.translate.currentLang) + 1;
    }
    else{
      id = 0;
    } 
    this.translate.use(this.langs[id])
    this.lang = this.langs[id];
  }

}
