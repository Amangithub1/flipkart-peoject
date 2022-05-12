import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";

@Component({
  selector: 'app-bottomwear',
  templateUrl: './bottomwear.component.html',
  styleUrls: ['./bottomwear.component.css']
})
export class BottomwearComponent implements OnInit {

   bottomWears = [];
  constructor(private dataApi: DataApiService) {}

  ngOnInit() {
    this.bottomWears = this.dataApi.getAllBottomWears();
    console.log(this.dataApi.getBottomWearById(1))
  }

}  