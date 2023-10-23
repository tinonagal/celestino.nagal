import { Component } from '@angular/core';
import { Meeting } from '../model/meeting';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent {

  meeting:Meeting[] = [];

  constructor(){
  this.meeting[0] = new Meeting("Cars arriving",20,"20/11/2023","10:30");
  this.meeting[1] = new Meeting("Check Cars specs",20,"29/11/2023","10:30");
  this.meeting[2] = new Meeting("Return unwanted cars",20,"30/11/2023","10:30");
  this.meeting[3] = new Meeting("Refurbish chosen cars",20,"8/12/2023","10:30");
  this.meeting[4] = new Meeting("Display cars to sell",20,"20/12/2023","10:30");
  }

}
