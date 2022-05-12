import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";

@Component({
  selector: 'app-washingmachine',
  templateUrl: './washingmachine.component.html',
  styleUrls: ['./washingmachine.component.css']
})
export class WashingmachineComponent implements OnInit {

  washingMachines=[];
  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
    this.washingMachines = this.dataApi.getAllWashingMachines();
    console.log(this.dataApi.getWashingMachineById(1));
  }

}