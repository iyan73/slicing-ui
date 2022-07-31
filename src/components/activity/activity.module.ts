import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity.component';



@NgModule({
  declarations: [
    ActivityComponent
  ],
  exports: [
    ActivityComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ActivityModule { }
