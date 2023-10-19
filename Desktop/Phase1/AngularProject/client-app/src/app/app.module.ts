import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { MeetingComponent } from './meeting/meeting.component';
import { Clientv2Component } from './clientv2/clientv2.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    MeetingComponent,
    Clientv2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
