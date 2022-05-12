import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  clocks = [];
  constructor(private dataApi: DataApiService) {}

  ngOnInit() {
    this. clocks = this.dataApi.getAllClocks();
    console.log(this.dataApi.getClocksById(1))
  }
} 