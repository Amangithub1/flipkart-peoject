import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";

@Component({
  selector: 'app-airconditioner',
  templateUrl: './airconditioner.component.html',
  styleUrls: ['./airconditioner.component.css']
})
export class AirconditionerComponent implements OnInit {

  airConditioners = [];
  constructor(private dataApi: DataApiService) {}

  ngOnInit() {
    console.log('ngOnInit');

    let param: any = 'Air Conditioner';

    const URL = 'api/productBycategoryName'

    console.log(URL);

    const postData =

    {

      'categoryName': param

    };

    console.log(postData)

    let responsePromise = my_async_fn(URL, 'Air Conditioner');

    console.log("response : " + responsePromise);

    responsePromise.then(resObj => {

      console.log("resObj " + resObj)

      let productsArr = resObj.product;

      productsArr.forEach(productObj => {

        console.log('prod name : ', productObj.name)

        console.log('prod desc : ', productObj.description)

        let air =

        {

          "pic": productObj.pic,

          "name": productObj.name,

          "color": productObj.color,

          "price": productObj.price,

          "desc": productObj.description

        }

        console.log('air obj : ', air);

        this.airConditioners.push(air);

      })

    })

    console.log('airConditioners list : ' + this.airConditioners);

  }

}

async function my_async_fn(url, param) {

  try {

    const postData =

    {

      'categoryName': param

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

    console.log('my_async_fn ' + response); // Logs the response

    if (response.ok) {

      //return json

      let data = response.json();

      console.log('my_async_fn if condition' + data);

      return data

    } else {

      return null;

    }

  }



  catch(e){

    return e;

  }

}