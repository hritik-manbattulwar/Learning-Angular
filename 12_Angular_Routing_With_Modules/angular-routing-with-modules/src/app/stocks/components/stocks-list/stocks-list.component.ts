import { Component } from '@angular/core';
import { IStock } from '../../models/IStock';
import { StocksService } from '../../services/stocks.service';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.css']
})
export class StocksListComponent {
  public stocks: IStock[] = [];

  constructor(private stockService: StocksService) { }

  ngOnInit(): void {
    this.stockService.getStocks().subscribe((data) => {
      this.stocks = data;
    })
  }
}
