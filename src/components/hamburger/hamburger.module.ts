import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamburgerComponent } from './hamburger.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    HamburgerComponent
  ],
  exports: [
    HamburgerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class HamburgerModule { }
