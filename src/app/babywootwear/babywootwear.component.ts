import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";

@Component({
  selector: 'app-babywootwear',
  templateUrl: './babywootwear.component.html',
  styleUrls: ['./babywootwear.component.css']
})
export class BabywootwearComponent implements OnInit {

  babyFootwears = [];
  products = [];
  constructor(private dataApi: DataApiService) { }

  ngOnInit() {console.log('ngOnInit');
  let param: any ='Baby Footwears';
  const URL = 'api/productBycategoryName'
  console.log(URL);
  const postData=
  {
    'categoryName':param
  };
  console.log(postData)
  let responsePromise=my_async_fn(URL,'Baby Footwears');
  console.log("response : "+responsePromise);
  responsePromise.then(resObj => {
    console.log("resObj "+resObj)
    let productsArr=resObj.product;
    productsArr.forEach(productObj => {
    console.log('prod name : ', productObj.name)
    console.log('prod name : ',productObj.description)
    let Baby=
    {
      "pic":productObj.pic,
      "name":productObj.name,
      "color":productObj.color,
      "price":productObj.price,
      "desc":productObj.description
    }
    console.log('Baby obj : ',Baby);
    this.babyFootwears.push(Baby);
    })
  })
  console.log('babyFootwers list : '+this.babyFootwears);
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
