import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";

@Component({
  selector: 'app-washingmachine',
  templateUrl: './washingmachine.component.html',
  styleUrls: ['./washingmachine.component.css']
})
export class WashingmachineComponent implements OnInit {

  washingMachines=[];
  products = [];
  constructor(private dataApi: DataApiService) { }

  ngOnInit() {console.log('ngOnInit');
  let param: any ='Washing Machine';
  const URL = 'api/productBycategoryName'
  console.log(URL);
  const postData=
  {
    'categoryName':param
  };
  console.log(postData)
  let responsePromise=my_async_fn(URL,'Washing Machine');
  console.log("response : "+responsePromise);
  responsePromise.then(resObj => {
    console.log("resObj "+resObj)
    let productsArr=resObj.product;
    productsArr.forEach(productObj => {
    console.log('prod name : ', productObj.name)
    console.log('prod name : ',productObj.description)
    let was=
    {
      "pic":productObj.pic,
      "name":productObj.name,
      "color":productObj.color,
      "price":productObj.price,
      "desc":productObj.description
    }
    console.log('was obj : ',was);
    this.washingMachines.push(was);
    })
  })
  console.log('washingMachines list : '+this.washingMachines);
  // getWashingMachines();
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

  // function getWashingMachines()
  // {
  //   console.log('getWashingMachines');
  //   let param: any ='Washing Machine';
  //   const URL = 'api/productBycategoryName'
  //   console.log(URL);
  //   const postData=
  //   {
  //     'categoryName':param
  //   };
  //   console.log(postData)
  //   let responsePromise=my_async_fn(URL,'Washing Machine');
  //   console.log("response : "+responsePromise);
  //   responsePromise.then(resObj => {
  //     console.log("resObj "+resObj)
  //     let productsArr=resObj.product;
  //     productsArr.forEach(productObj => {
  //     console.log('prod name : ', productObj.name)
  //     console.log('prod name : ',productObj.description)
  //     let was=
  //     {
  //       "pic":productObj.pic,
  //       "name":productObj.name,
  //       "color":productObj.color,
  //       "price":productObj.price,
  //       "desc":productObj.description
  //     }
  //     console.log('was obj : ',was);
  //     this.mobiles.push(was);
  //     })
  //   })
  //   console.log('washingMachines list : '+this.washingMachines);
  // }