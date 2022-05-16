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
  

  ngOnInit() 
  {
    console.log('ngOnInit');
    let param: any ='Mobiles';
    const URL = 'api/productBycategoryName'
    console.log(URL);
    const postData=
    {
      'categoryName':param
    };
    console.log(postData)
    let responsePromise=my_async_fn(URL,'Mobiles');
    console.log("response : "+responsePromise);
    responsePromise.then(resObj => {
      console.log("resObj "+resObj)
      let productsArr=resObj.product;
      productsArr.forEach(productObj => {
      console.log('prod name : ', productObj.name)
      console.log('prod name : ',productObj.description)
      let mob=
      {
        "pic":productObj.pic,
        "name":productObj.name,
        "color":productObj.color,
        "price":productObj.price,
        "desc":productObj.description
      }
      console.log('mob obj : ',mob);
      this.mobiles.push(mob);
      })
    })
    console.log('mobiles list : '+this.mobiles);
    // getMobile();
   }
}
  async function my_async_fn(url,param) {
    try{
      const postData=
      {
        'categoryName':param
      };
      const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
    };
    let response = await fetch(url, settings);
    console.log('my_async_fn '+response); // Logs the response
    if (response.ok) 
    {
      //return json
      let data=response.json();
      console.log('my_async_fn if condition'+data);
      return data
  } else {
      return null;
  }
}
    catch(e){
      return e;
    }
    
  }

  function getMobile()
  {
    console.log('getMobile');
    let param: any ='Mobiles';
    const URL = 'api/productBycategoryName'
    console.log(URL);
    const postData=
    {
      'categoryName':param
    };
    console.log(postData)
    let responsePromise=my_async_fn(URL,'Mobiles');
    console.log("response : "+responsePromise);
    responsePromise.then(resObj => {
      console.log("resObj "+resObj)
      let productsArr=resObj.product;
      productsArr.forEach(productObj => {
      console.log('prod name : ', productObj.name)
      console.log('prod name : ',productObj.description)
      let mob=
      {
        "pic":productObj.pic,
        "name":productObj.name,
        "color":productObj.color,
        "price":productObj.price,
        "desc":productObj.description
      }
      console.log('mob obj : ',mob);
      this.mobiles.push(mob);
      })
    })
    console.log('mobiles list : '+this.mobiles);
  }
