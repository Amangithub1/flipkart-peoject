import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormsModule,FormBuilder , FormGroup , ReactiveFormsModule,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  buyproducts = [];
  UserName;
  price;
  total=0;

  constructor(private cartService: CartService,
              private formBuilder: FormBuilder,) {
    
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group(
      {
      productId: new FormControl('',Validators.required),
      prod_price:new FormControl('',Validators.required),
      userAddress: new FormControl('',Validators.required),
      quantity: new FormControl('',Validators.required)
      }
    );
   }

  ngOnInit() {
    const URL = 'api/products/productById'
    var cartProdId=localStorage.getItem("products");
    const areThereAnyCommas = cartProdId.includes(',');
    console.log('comma '+areThereAnyCommas);
    if(areThereAnyCommas)
    {
      var prodArr=cartProdId.split(',');
      console.log('prodArr '+prodArr);
      console.log('prodArr '+prodArr.length);
      if(prodArr.length>0)
      {
        prodArr.forEach(prodId => {
      let responsePromise=my_async_fn(URL,prodId);
      console.log("response : "+responsePromise);
        responsePromise.then(resObj => {
        console.log("resObj "+resObj)
        let productObj=resObj.product;
        console.log('prod name : ', productObj.name)
        console.log('prod name : ',productObj.description)
        let mob=
        {
          "id":productObj._id,
          "pic":productObj.pic,
          "name":productObj.name,
          "color":productObj.color,
          "price":productObj.price,
          "desc":productObj.description,
          "quantity":localStorage.getItem(productObj._id)
        }
        console.log('mob obj : ',mob);
        this.buyproducts.push(mob);
      })
    })
    }
    console.log('buyproducts : ',this.buyproducts);
    }
    else
    {
      console.log('single prod'+cartProdId);
      let responsePromise=my_async_fn(URL,cartProdId);
      console.log("single prod response : "+responsePromise);
      responsePromise.then(resObj => {
      console.log("single prod resObj "+resObj)
      let productObj=resObj.product;
        console.log('prod name : ', productObj.name)
        console.log('prod name : ',productObj.description)
        let mob=
        {
          "id":productObj._id,
          "pic":productObj.pic,
          "name":productObj.name,
          "color":productObj.color,
          "price":productObj.price,
          "desc":productObj.description,
          "quantity":localStorage.getItem(productObj._id)
        }
        console.log('mob obj : ',mob);
        this.buyproducts.push(mob);
      })
      console.log('mobiles list : '+this.buyproducts);
      // getMobile();
     }
  }
  
  update(customerData) 
  {
    this.total=0;
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    var prodID=customerData.productId;
    var qty=customerData.quantity;
    var prod_price=customerData.prod_price;
    var address=customerData.address;
    localStorage.setItem(prodID,qty);
    console.log('prod_price '+prod_price);
    this.UserName=localStorage.getItem("userName");
    console.log('address '+address);
    var userId=localStorage.getItem("userId");
    console.log('userId '+userId);
    var cartProdId=localStorage.getItem("products");
    const areThereAnyCommas = cartProdId.includes(',');
    console.log('comma '+areThereAnyCommas);
    if(areThereAnyCommas)
    {
      var prodArr=cartProdId.split(',');
      console.log('prodArr '+prodArr);
      prodArr.forEach(prod_id => {
      console.log('prod_id '+localStorage.getItem(prod_id));
      console.log('prod_price '+prod_price);
      console.log('qty '+qty);
      console.log('calc '+(prod_price*qty));
      this.total=this.total+(prod_price*qty);
      console.log('total '+this.total);
      })
    }
    else
    {
      console.log('prod single '+cartProdId);
      console.log('prod_id '+localStorage.getItem(cartProdId));
      console.log('prod_price '+prod_price);
      console.log('qty '+qty);
      console.log('calc '+(prod_price*qty));
      this.total=this.total+(prod_price*qty);
      console.log('total '+this.total);
    }



// Add to cart API

    // this.items = this.cartService.clearCart();
    // this.checkoutForm.reset();
  }

onSubmit(cartData)
{
console.log('onSubmit ',cartData);
var usr=localStorage.getItem("userId");
var p=cartData.productId;
var q=cartData.quantity;
var price=this.total;
var  address=cartData.userAddress;
console.log('price'+price);
console.log('price'+p);
console.log('price'+q);
console.log('price'+usr);
console.log('price'+address);
var PLACE_ORDER="api/user/cart/addtocart";
let responsePromise=my_async_fn2(PLACE_ORDER,usr,p,q,price,address);
      console.log("cart response : "+responsePromise);
      responsePromise.then(resObj => {
      console.log("mycart resObj "+resObj)
      let mycart=resObj.mycart;
        console.log('mycart id : ', mycart._id)
        let sys=mycart._id;
        if(sys==null){
          alert('unable to place order');
        }
        else{
          alert('order placed sucessfully, and will be delivered to you shortly');
          localStorage.clear();
          console.log("chk "+localStorage.getItem("userToken"));
          window.location.href="index.html";
        }
        console.log('mycart user : ',mycart.user)
      })
}

}

async function my_async_fn(url,param) {
  try{
    const postData=
    {
      'prodId':param
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

async function my_async_fn2(url,usr,product,qty,price,address) {
try{
  const postData=
  {
    'user':usr,
    'product':product,
    'quantity':qty,
    'price':price,
    'address':address
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
console.log('my_async_fn2 '+response); // Logs the response
if (response.ok) 
{
  //return json
  let data=response.json();
  console.log('my_async_fn2 if condition'+data);
  return data
} else {
  return null;
  }
}
catch(e){
  return e;
}

}
