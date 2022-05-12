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
  constructor(public dialog: MatDialog) {}

  
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
}
