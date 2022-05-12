import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";

@Component({
  selector: 'app-bed',
  templateUrl: './bed.component.html',
  styleUrls: ['./bed.component.css']
})
export class BedComponent implements OnInit {

 beds = [];
  constructor(private dataApi: DataApiService) {}

  ngOnInit() {
    this. beds = this.dataApi.getAllBeds();
    console.log(this.dataApi.getBedById(1))
  }

} 