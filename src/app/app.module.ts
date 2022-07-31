import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivityModule } from 'src/components/activity/activity.module';
import { BreadcrumbModule } from 'src/components/breadcrumb/breadcrumb.module';
import { ChannelModule } from 'src/components/channel/channel.module';
import { DocumentModule } from 'src/components/document/document.module';
import { PeopleModule } from 'src/components/people/people.module';
import { VideoModule } from 'src/components/video/video.module';
import { NavbarModule } from 'src/components/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ActivityModule,
    BreadcrumbModule,
    ChannelModule,
    DocumentModule,
    PeopleModule,
    VideoModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
