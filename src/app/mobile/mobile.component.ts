import { Component, OnInit } from "@angular/core";
import { DataApiService } from "../data-api.service";
import { FormsModule,FormBuilder , FormGroup , ReactiveFormsModule,FormControl, Validators } from '@angular/forms';

import { CartService } from "../cart.service";


@Component({
  selector: "app-mobile",
  templateUrl: "./mobile.component.html",
  styleUrls: ["./mobile.component.css"]
})

export class MobileComponent implements OnInit {
  mobiles = [];
  products = [];
  cart_items;
  cart_qty;
  mainForm : FormGroup = new FormGroup(
    {
        productId: new FormControl('',Validators.required),
    }
    );

  constructor(private dataApi: DataApiService,
    private formBuilder: FormBuilder, private cartService: CartService)
     {
  }


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
        "id":productObj._id,
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

  onSubmit(customerData) {
    // Process checkout data here
    console.log('Mobile data ',customerData);
    console.log('mainForm' + customerData.productId);
    const prodId = customerData.productId;
    console.log('id :',prodId);
    console.log('local check',localStorage.getItem("products"));
    if(localStorage.getItem("products") !=null)
    {
      var alreadyInCart=localStorage.getItem("products");
      alreadyInCart=alreadyInCart+','+prodId;
      console.log('alreadyInCart :',alreadyInCart);
      localStorage.setItem(prodId,'1');
    }
    else
    {
      alreadyInCart=prodId;
      console.log('alreadyInCart :',alreadyInCart);
      localStorage.setItem(prodId,'1');
    }
    localStorage.setItem("products",alreadyInCart);
    console.log('local :',localStorage.getItem("products"));
    console.log('local :',localStorage.getItem(prodId));
  }

  addToCart(products) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(products);
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

