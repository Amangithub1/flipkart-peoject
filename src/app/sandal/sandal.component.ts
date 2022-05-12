import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";

@Component({
  selector: 'app-sandal',
  templateUrl: './sandal.component.html',
  styleUrls: ['./sandal.component.css']
})
export class SandalComponent implements OnInit {

 sandals = [];
  constructor(private dataApi: DataApiService) {}

  ngOnInit() {
    this.sandals = this.dataApi.getAllSandals();
    console.log(this.dataApi.getSandalById(1))
  }
} 