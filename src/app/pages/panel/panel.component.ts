import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoneyExchangeService } from '../../services/money-exchange.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {



  conversionRate:number=0;

 changeForm:FormGroup;
  symbols:string[]=[];

  constructor(private _exchange:MoneyExchangeService, private fb:FormBuilder) {
    this.createForm();
    this.getSymbols();
    this.change();
  }

  ngOnInit(): void {
  }

  get symbol1(){
   return this.changeForm.get('symbol1')?.value;
  }

  get symbol2(){
    return this.changeForm.get('symbol2')?.value;
   }

  get number1(){
     return this.changeForm.get('number1')?.value;
   }

  get number2(){
    return this.changeForm.get('number2')?.value;
  }



   getSymbols(){
    this._exchange.getAllCurrencies().subscribe((data:string[])=>{
      data.forEach((data)=>{
        this.symbols.push(data[0]);
      })
    });


   }


   createForm(){
    this.changeForm=this.fb.group({
      symbol1:['USD', Validators.required],
      symbol2:['EUR', Validators.required],
      number1:[1, Validators.required],
      number2:[0, Validators.required],
    })
   }


  change(){
    this._exchange.getExchangeAmount(this.symbol1, this.symbol2).subscribe((data:number)=>{
      this.conversionRate=data;
      this.changeForm.get('number2')?.setValue((this.number1*this.conversionRate).toFixed(2));
    })
  }



  swap(){
    let tempSymbol1=this.symbol1;
    this.changeForm.get('symbol1')?.setValue(this.symbol2);
    this.changeForm.get('symbol2')?.setValue(tempSymbol1);
    this.change()
  }


  setNumber1(){
    if(this.number2>=0 && this.number2){
      this.changeForm.get('number1')?.setValue((this.number2/this.conversionRate).toFixed(2));
    }else{
      this.changeForm.get('number1')?.setValue(0);
    }

  }


  setNumber2(){
    if(this.number1>=0 && this.number1){
      this.changeForm.get('number2')?.setValue((this.number1*this.conversionRate).toFixed(2));
    }else{
      this.changeForm.get('number2')?.setValue(0);
    }
    }
}
