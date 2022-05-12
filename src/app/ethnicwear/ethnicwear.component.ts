import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";

@Component({
  selector: 'app-ethnicwear',
  templateUrl: './ethnicwear.component.html',
  styleUrls: ['./ethnicwear.component.css']
})
export class EthnicwearComponent implements OnInit {

  ethnicWears= [];
  constructor(private dataApi: DataApiService) {}

  ngOnInit() {
    this.ethnicWears = this.dataApi.getAllEthnicWears();
    console.log(this.dataApi.getEthnicWearById(1))
  }

}