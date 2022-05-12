import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private allProductsURL = 'http://localhost:6000/api/products/all';
   
  constructor(private httpClient: HttpClient) { }
  
  getProduct(){
    this.httpClient.get<any>(this.allProductsURL).subscribe(data => 
      {
      console.log(this.allProductsURL);
      console.log('resp : '+data);
      console.log('Subscribe executed.')
    });
    console.log('I will not wait until subscribe is executed..');
  }
}