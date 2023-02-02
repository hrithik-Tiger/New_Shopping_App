import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  productUrl : string = " https://fakestoreapi.com/products/";
  constructor(private http: HttpClient) { }
  getProducts(){
    return this.http.get<any>(this.productUrl).pipe(map((res:any)=>{
      return res;
    }))
  }
}
