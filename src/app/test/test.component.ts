import { Component, OnInit } from '@angular/core';
//import { stringify } from 'querystring';
import { PostService } from "../services/post.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  productsData=[];
  //constructor() { }
  constructor(private postApi: PostService) {}
  

  ngOnInit(): void {
    // API for get requests
    let fetchRes = fetch(
      "/api/products/all");
        
              // fetchRes is the promise to resolve
              // it by using.then() method
              fetchRes.then(res =>
                  res.json()).then(d => {
                      console.log(d)
                      //let DataObj=JSON.parse(d);
                      //console.log(DataObj)
                      console.log(d.products)
                      let productsObj=d.products;
                      productsObj.forEach(product => {
                      console.log('prod nme : ', product.name)
                      })
                    })
    // this.postApi.getProduct();
    // this.myMethod();
  }

  async myMethod(){
    let data = await this.postApi.getParticularData();
    console.log('myMethod '+data);
    let jsonDta=<JSON>(data);
    console.log('myMethod json: '+jsonDta);
    console.log('myMethod data: '+data[0]);
    console.log('myMethod json: '+jsonDta[0]);
    // this.productsData=jsonDta.products;
   }


}
