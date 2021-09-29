import { Component, OnInit } from '@angular/core';
import { StockService } from './service/stockService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private stocksService: StockService) { }
  title = 'blastradius';
  stockInfo: any;
  firstTen: any;

  ngOnInit() {
    this.stocksService.getStocks().subscribe(data => this.stockInfo = data);
  }

  sortStocks() {
    this.stockInfo.results.sort((a: any, b: any) => {
      return b.v - a.v;
    });
    this.firstTen = this.stockInfo.results.slice(0,10);
  }


}
