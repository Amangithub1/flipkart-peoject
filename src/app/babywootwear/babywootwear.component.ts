import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";

@Component({
  selector: 'app-babywootwear',
  templateUrl: './babywootwear.component.html',
  styleUrls: ['./babywootwear.component.css']
})
export class BabywootwearComponent implements OnInit {

  babyFootwears = [];
  constructor(private dataApi: DataApiService) {}

  ngOnInit() {
    this.babyFootwears = this.dataApi.getAllBabyFootwears();
    console.log(this.dataApi.getBabyFootwearById(1))
  }
} 