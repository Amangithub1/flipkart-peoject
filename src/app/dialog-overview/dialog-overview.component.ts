import { Component, OnInit,NgModule } from '@angular/core';
import { FormsModule,FormBuilder , FormGroup , ReactiveFormsModule,FormControl, Validators } from '@angular/forms';
//import { MatFormField } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.css']
})
export class DialogOverviewComponent implements OnInit {
  isLogin  = true;
  //form: FormGroup;
  loginform : FormGroup = new FormGroup(

    {
        email: new FormControl('',Validators.required),
        password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)])
    }
  
    );
  myform : FormGroup = new FormGroup(

  {   firstname: new FormControl('',Validators.required),
      lastname: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)])
  }

  );
  constructor(public fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    console.log(this.isLogin);
    
   }

  reg() {
    console.log('inside reg()'+this.isLogin);
    this.isLogin = false;
    console.log(this.isLogin);
  }


Register(){
    console.log('Register');
    const URL = 'api/signup'
    console.log(this.myform)
    const data = 
    {
      'email': this.myform.get('email').value,
      'firstName': this.myform.get('firstname').value,
      'lastName': this.myform.get('lastname').value,
      'password': this.myform.get('password').value
    };
// Send a post request

let fetchRes=fetch(URL, {
   method: "POST",
   body: JSON.stringify(data),
   headers: {
      "Content-type": "application/json; charset=UTF-8"
   }
});

fetchRes.then(res =>
  res.json()).then(d => {
      console.log(d)
  });
}
Login(){
  console.log('Login');
  const URL = 'api/signin'
  console.log(this.loginform)
  const data = 
  {
    'email': this.loginform.get('email').value,
    'password': this.loginform.get('password').value
  };
// Send a post request

let fetchRes=fetch(URL, {
 method: "POST",
 body: JSON.stringify(data),
 headers: {
    "Content-type": "application/json; charset=UTF-8"
 }
});

fetchRes.then(res =>
res.json()).then(d => {
    console.log(d)
});
}
}
