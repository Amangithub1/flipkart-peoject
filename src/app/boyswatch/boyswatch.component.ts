import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";

@Component({
  selector: 'app-boyswatch',
  templateUrl: './boyswatch.component.html',
  styleUrls: ['./boyswatch.component.css']
})
export class BoyswatchComponent implements OnInit {

  boyswatches = [];
  constructor(private dataApi: DataApiService) {}

  ngOnInit() {
    this.boyswatches = this.dataApi.getAllBoysWatches();
    console.log(this.dataApi.getBoysWatchById(1))
  }
}