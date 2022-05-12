import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";

@Component({
  selector: 'app-footwear',
  templateUrl: './footwear.component.html',
  styleUrls: ['./footwear.component.css']
})
export class FootwearComponent implements OnInit {

  footWears = [];
  constructor(private dataApi: DataApiService) {}

  ngOnInit() {
    this.footWears = this.dataApi.getAllFootWears ();
    console.log(this.dataApi.getFootWearById(1))
  }
}