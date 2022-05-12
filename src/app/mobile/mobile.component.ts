import { Component, OnInit } from "@angular/core";
import { DataApiService } from "../data-api.service";
import { PostService } from "../services/post.service";

@Component({
  selector: "app-mobile",
  templateUrl: "./mobile.component.html",
  styleUrls: ["./mobile.component.css"]
})
export class MobileComponent implements OnInit {
  mobiles = [];
  //constructor(private dataApi: DataApiService) {}
  constructor(private postApi: PostService) {}

  ngOnInit() {
    // this.mobiles = this.dataApi.getAllMobiles();
    // console.log("mobile : "+this.dataApi.getMobileById(1))
    this.postApi.getProduct();
    console.log(this.postApi.getProduct());
  }
}
