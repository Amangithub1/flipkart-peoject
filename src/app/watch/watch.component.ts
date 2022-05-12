import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";


@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  watches=[];
  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
    this.watches = this.dataApi.getAllWatches();
    console.log(this.dataApi.getWatchById(1));
  }
}