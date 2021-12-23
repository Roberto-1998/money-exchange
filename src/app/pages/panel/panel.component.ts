import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoneyExchangeService } from '../../services/money-exchange.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {


 changeForm:FormGroup;

  symbols:string[]=[];

  constructor(private _exchange:MoneyExchangeService, private fb:FormBuilder) {

    this.createForm();

    this._exchange.getAllCurrencies().subscribe((data:any)=>{
      this.symbols=Object.keys(data);
    });



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



   createForm(){
    this.changeForm=this.fb.group({
      symbol1:['USD', Validators.required],
      symbol2:['EUR', Validators.required],
      number1:[0, Validators.required],
      number2:[0, Validators.required],
    })
   }


  change(from:string, to:string, amount:number, assign:string){

    if(amount && amount>=0){
      this._exchange.getExchangeAmount(from,to,amount).subscribe((data:number)=>{
      this.changeForm.get(assign)?.setValue(data.toFixed(2));
      })
    }else{
      this.changeForm.get(assign)?.setValue(0);
    }

  }

  swap(){
    let tempSymbol1=this.symbol1;
    this.changeForm.get('symbol1')?.setValue(this.symbol2);
    this.changeForm.get('symbol2')?.setValue(tempSymbol1);
    this.change(this.symbol1, this.symbol2, this.number1, 'number2')
  }







}
