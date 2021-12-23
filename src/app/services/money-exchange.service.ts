import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';


const baseUrl=environment.baseUrl;
const apiKey=environment.apiKey;




@Injectable({
  providedIn: 'root'
})
export class MoneyExchangeService {




  constructor(private http:HttpClient) {
   }

   getAllCurrencies(){
    return this.http.get(`${baseUrl}${apiKey}/codes`).pipe(
      map(
       ( data:any)=>data.supported_codes
      )
    )
   }


   getExchangeAmount(from:string, to:string){
    return this.http.get(`${baseUrl}${apiKey}/pair/${from}/${to}`).pipe(
      map(
        (data:any)=>data.conversion_rate
      )
    )

   }



}
