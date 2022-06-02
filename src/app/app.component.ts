import { Component, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { DialogOverviewComponent } from "./dialog-overview/dialog-overview.component";
import { RegisterComponent } from "./dialog-overview/register/register.component";
import { ViewEncapsulation } from "@angular/core";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  usr;
  constructor(public dialog: MatDialog) {
  }
  isUser=false;
  
  ngOnInit() {
    console.log("appcomponenet"+this.isUser);
    let chkUser=this.usr=localStorage.getItem("userToken");
    console.log("appcomponenet chkUser "+chkUser);
    if(chkUser !=null)
    {
    this.isUser=true;
    this.usr=localStorage.getItem("userName");
    }
    
   }
  
  openDialog() {
    this.dialog.open(DialogOverviewComponent);
  }
  openDialog1() {
    this.dialog.open(RegisterComponent);
  }
  mobile() {
    // this.mobiles.display()
  }

  clock() {}

  logout()
  {
    localStorage.clear();
    console.log("chk "+localStorage.getItem("userToken"));
    window.location.href="index.html";
  }
}

 
