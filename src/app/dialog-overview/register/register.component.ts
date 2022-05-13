import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { MatFormField } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: [''],
      avatar: [null],
    });
  }

  //constructor() { }

  ngOnInit() {
  }

//   Register(){
//     console.log('Register');
//     const URL = 'api/signup'
// const data = 
// {
//   'email': this.form.get('customerEmail').value,
//   'firstName': '',
//   'lastName': '',
//   'password': ''
// };
// // Send a post request
// let fetchRes=fetch(URL, {
//    method: "POST",
//    body: JSON.stringify(data),
//    headers: {
//       "Content-type": "application/json; charset=UTF-8"
//    }
// });

// fetchRes.then(res =>
//   res.json()).then(d => {
//       console.log(d)
//   });



//   }
  submitForm() {
    var formData: any = new FormData();
    formData.append('email', this.form.get('customerEmail').value);
    formData.append('avatar', this.form.get('avatar').value);
    this.http
      .post('api/signup', formData)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
    }
}