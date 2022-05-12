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
    this.airConditioners = this.dataApi.getAllAirConditioners();
    console.log(this.dataApi.getAirConditionerById(1))
  }
}