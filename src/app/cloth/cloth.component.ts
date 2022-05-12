import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";

@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.css']
})
export class ClothComponent implements OnInit {

  clothing = [];
  constructor(private dataApi: DataApiService) {}

  ngOnInit() {
    this.clothing = this.dataApi.getAllClothing();
    console.log(this.dataApi.getClothById(1))
  }

}