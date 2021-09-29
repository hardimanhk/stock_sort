import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StockService {
    constructor(private http: HttpClient) { }

    stocksURL = "https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2021-09-20?adjusted=true&apiKey=3SAHnymN9iFqPVXkLzKzVrZYY8n29nPW";

    getStocks() {
        return this.http.get(this.stocksURL);
    }
}