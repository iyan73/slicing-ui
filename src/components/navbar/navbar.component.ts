import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HamburgerComponent } from '../hamburger/hamburger.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openProfile(){
    this.dialog.open(ProfileComponent, {
      width: '80%'
    });
  }
  openHamburger(){
    this.dialog.open(HamburgerComponent, {
      width: '80%'
    });
  }

}
