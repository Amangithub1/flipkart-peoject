import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from "rxjs/operators";
import { json } from 'body-parser';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private allProductsURL = 'http://localhost:6000/api/products/all';
   
  constructor(private httpClient: HttpClient) { }
  
  
   public getInfo(URL: string): Observable<any> {
    return this.httpClient.get( URL )
      .pipe(
        tap( (fetchJSON) => JSON.stringify(fetchJSON) )
      )
      }  
  public getParticularData(){
    let infoJSON;
    let URL = "/api/products/all";
    infoJSON = this.getInfo(URL)
    console.log('infoJSON '+infoJSON)
    map(data =>{ console.log('map :'+data) });
    // the console.log(data) inside the .subscribe returns my Json data perfectly
  
    return new Promise((resolve)=>{
        infoJSON.subscribe((data)=>resolve(data))
    })
  
  }
  getProduct(){
    this.httpClient.get<any>('/api/products/all').subscribe(data => 
      {
      console.log(this.allProductsURL);
      console.log('resp : '+data);
      console.log('resp products: '+data.products);
      // console.log('resp stringy: '+JSON.stringify(data));
      let DatajsonObj=JSON.parse(JSON.stringify(data));
      console.log('arr '+DatajsonObj);
      // let array=data.products;
      // array.forEach(element => {
      //   let jsonObj=JSON.parse(element);
      //   console.log('arr '+element);
      //   console.log('arr 1'+jsonObj);
      //   console.log('arr 2'+element.json);
      //   console.log('arr 3'+<JSON>element);
      // });
      console.log('Subscribe executed.')
      return JSON.stringify(data);
    });
    console.log('I will not wait until subscribe is executed..');
  }

  public async getMobiles() {
    let url = "/api/products/all";
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async getData()
  {
    let fetchRes = this.getMobiles();
    // fetchRes.forEach(product => {
    //   console.log('prod name : ', product.name)
    // })

  }



}