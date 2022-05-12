import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";

@Component({
  selector: 'app-computeracc',
  templateUrl: './computeracc.component.html',
  styleUrls: ['./computeracc.component.css']
})
export class ComputeraccComponent implements OnInit {

 computerAccs = [];
  constructor(private dataApi: DataApiService) {}

  ngOnInit() {
    this.computerAccs  = this.dataApi.getAllComputerAccs();
    console.log(this.dataApi.getComputerAccById(1))
  }
}