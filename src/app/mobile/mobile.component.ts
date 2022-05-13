import { Component, OnInit } from "@angular/core";
import { DataApiService } from "../data-api.service";


@Component({
  selector: "app-mobile",
  templateUrl: "./mobile.component.html",
  styleUrls: ["./mobile.component.css"]
})
export class MobileComponent implements OnInit {
  mobiles = [];
  products = [];
  constructor(private dataApi: DataApiService) {}
  

  ngOnInit() {
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
                  this.products=d.products
                  let productsObj=d.products;
                  productsObj.forEach(product => {
                  console.log('prod name : ', product.name)
                  console.log(product.description)
                  let mob=
                  {
                    "pic":product.pic,
                    "name":product.name,
                    "color":product.color,
                    "price":product.price,
                    "desc":product.description
                  }
                  this.mobiles.push(mob)
                  })
                  console.log('mobile '+this.mobiles)
                })

  console.log("products : "+this.mobiles)
    // this.mobiles = this.dataApi.getAllMobiles();
    // console.log("mobile : "+this.dataApi.getMobileById(1))
    
  }
}
