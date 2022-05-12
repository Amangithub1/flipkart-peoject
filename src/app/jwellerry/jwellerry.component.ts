import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";

@Component({
  selector: 'app-jwellerry',
  templateUrl: './jwellerry.component.html',
  styleUrls: ['./jwellerry.component.css']
})
export class JwellerryComponent implements OnInit {

  jwellerry = [];
  constructor(private dataApi: DataApiService) {}

  ngOnInit() {
    this.jwellerry = this.dataApi.getAllJwellerry ();
    console.log(this.dataApi.getJwellById(1))
  }

}