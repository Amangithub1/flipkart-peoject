import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";


@Component({
  selector: 'app-winterwear',
  templateUrl: './winterwear.component.html',
  styleUrls: ['./winterwear.component.css']
})
export class WinterwearComponent implements OnInit {

  winterWears=[];
  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
    this.winterWears = this.dataApi.getAllWinterWears();
    console.log(this.dataApi.getWinterWearById(1));
  }

}