import { Component, OnInit } from '@angular/core';
import { MoneyExchangeService } from '../../services/money-exchange.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {


  symbols:string[]=[];

  constructor(private _exchange:MoneyExchangeService) {

    this._exchange.getAllCurrencies().subscribe((data:any)=>{
      console.log(Object.keys(data));
      this.symbols=Object.keys(data);
    })

  }

  ngOnInit(): void {
  }

}
