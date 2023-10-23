import { Component } from '@angular/core';
import { Meeting } from '../model/meeting';

@Component({
  selector: 'meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent {

      meeting:Meeting = new Meeting("Cars to import",10,"10/12/2023","10:23");
  // topic:string = "Cars to import";
  // participants:number = 100;
  // meetingDate:any = "10/12/2023";
  // meetingTime:any = "10:23";
}
