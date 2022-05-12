import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatDialogModule
  ],
  declarations: [],
  exports: [
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class MaterialModule {}
