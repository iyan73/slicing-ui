import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelComponent } from './channel.component';



@NgModule({
  declarations: [
    ChannelComponent
  ],
  exports: [
    ChannelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChannelModule { }
