import { Component } from '@angular/core';
import { IStock } from '../../models/IStock';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { StocksService } from '../../services/stocks.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent {
  public stockName: string | null = '';
  public selectedStock: IStock | any;
  constructor(private activatedRoute: ActivatedRoute,
    private stockService: StocksService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.stockName = param.get('name');
    })

    this.stockService.getStocks().subscribe((data) => {

      this.selectedStock = data.find(stock => stock.name === this.stockName);
    })
  }
}
