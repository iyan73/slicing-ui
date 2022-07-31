import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { ProfileModule } from '../profile/profile.module';
import { HamburgerModule } from '../hamburger/hamburger.module';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    ProfileModule,
    HamburgerModule
  ]
})
export class NavbarModule { }
