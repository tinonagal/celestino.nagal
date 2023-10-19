import { Component } from '@angular/core';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent {

  meetingTopic:string = "Cars to import";
  participants:number = 100;
  meetingDate:any = "10/12/2023";
  meetingTime:any = "10:23";
}
