import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<HamburgerComponent>
  ) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close()
  }

}
