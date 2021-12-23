import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
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
     return this.http.get(`${baseUrl}symbols?access_key=${apiKey}`).pipe(
       map((data:any)=>data.symbols)
     )
   }


}
