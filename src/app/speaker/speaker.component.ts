import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerComponent implements OnInit {
  speakers=[];
  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
    this.speakers = this.dataApi.getAllSpeakers();
    console.log(this.dataApi.getSpeakerById(1));
  }

}