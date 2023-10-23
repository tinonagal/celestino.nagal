import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { MeetingComponent } from './meeting/meeting.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientSearchComponent } from './client-search/client-search.component';
import { ClientService } from './services/client.service';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';

const routes: Routes = [
  {path: 'home',component: ClientComponent},
  {path: 'create-client',component: CreateClientComponent},
  {path: 'client-list',component: ClientListComponent},
  {path: 'create-meeting',component: CreateMeetingComponent},
  {path: 'meeting-list',component: MeetingListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    MeetingComponent,
    ClientListComponent,
    ClientSearchComponent,
    MeetingListComponent,
    CreateClientComponent,
    CreateMeetingComponent
  ],
  imports: [RouterModule.forRoot(routes),FormsModule, ReactiveFormsModule,
    BrowserModule
  ],
  exports:[RouterModule],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
