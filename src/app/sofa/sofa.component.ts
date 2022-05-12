import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";

@Component({
  selector: 'app-sofa',
  templateUrl: './sofa.component.html',
  styleUrls: ['./sofa.component.css']
})
export class SofaComponent implements OnInit {

   sofas = [];
  constructor(private dataApi: DataApiService) {}

  ngOnInit() {
    this.sofas = this.dataApi.getAllSofas();
    console.log(this.dataApi.getSofaById(1))
  }

} 