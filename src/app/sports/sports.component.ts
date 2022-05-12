import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  sports=[];
  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
    this.sports = this.dataApi.getAllSports();
    console.log(this.dataApi.getSportById(1));
  }
}