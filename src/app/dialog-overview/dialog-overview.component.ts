import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.css']
})
export class DialogOverviewComponent implements OnInit {
  isLogin  = true;
  
  constructor() { }

  ngOnInit() {
    console.log(this.isLogin);
  }

  reg() {
    console.log('inside reg()'+this.isLogin);
    this.isLogin = false;
    console.log(this.isLogin);
  }

}