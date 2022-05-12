import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";

@Component({
  selector: 'app-mobileacc',
  templateUrl: './mobileacc.component.html',
  styleUrls: ['./mobileacc.component.css']
})
export class MobileaccComponent implements OnInit {

  mobileAccs = [];
  constructor(private dataApi: DataApiService) {}

  ngOnInit() {
    this.mobileAccs = this.dataApi.getAllMobileAccs();
    console.log(this.dataApi.getMobileAccById(1))
  }

}