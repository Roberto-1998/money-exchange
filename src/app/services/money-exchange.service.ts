import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';


const baseUrl1=environment.baseUrl1;
const apiKey1=environment.apiKey1;

const apiKey2=environment.apiKey2;
const baseUrl2=environment.baseUrl2;


@Injectable({
  providedIn: 'root'
})
export class MoneyExchangeService {




  constructor(private http:HttpClient) {
   }

   getAllCurrencies(){
     return this.http.get(`${baseUrl1}symbols?access_key=${apiKey1}`).pipe(
       map((data:any)=>data.symbols)
     )
   }


   getExchangeAmount(from:string, to:string, ammount:number){

    return this.http.get(`${baseUrl2}${apiKey2}/pair/${from}/${to}/${ammount}`).pipe(
      map(
        (data:any)=>data.conversion_result
      )
    )

   }



}
