import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'store-auditorias-stock',
  templateUrl: './auditorias-stock.component.html',
  styleUrls: ['./auditorias-stock.component.css']
})
export class AuditoriasStockComponent implements OnInit {

  constructor() { }

  dateTime: Date;

  ngOnInit() {
    this.dateTime = new Date();
  }

}
