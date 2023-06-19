import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IStock } from 'src/app/models/IStock';
import { StocksService } from 'src/app/services/stocks/stocks.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent {
  public stockName: string| null='';
  public selectedStock: IStock| any;
  constructor(private activatedRoute:ActivatedRoute,
    private stockService:StocksService){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param:ParamMap)=>{
        this.stockName=param.get('name');
    })

    this.stockService.getStocks().subscribe((data)=>{
      
      this.selectedStock=data.find(stock=>stock.name===this.stockName);
    })
  }
}
