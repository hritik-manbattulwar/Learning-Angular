import { Component } from '@angular/core';
import { IStock } from 'src/app/models/IStock';
import { StocksService } from 'src/app/services/stocks/stocks.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {
  public stocks: IStock[] = [];

  constructor(private stockService: StocksService) { }

  ngOnInit(): void {
    this.stockService.getStocks().subscribe((data) => {
      this.stocks = data;
    })
  }
}
