import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";

@Component({
  selector: 'app-toy',
  templateUrl: './toy.component.html',
  styleUrls: ['./toy.component.css']
})
export class ToyComponent implements OnInit {

  toys=[];
  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
    this.toys = this.dataApi.getAllToys();
    console.log(this.dataApi.getToyById(1));
  }

} 