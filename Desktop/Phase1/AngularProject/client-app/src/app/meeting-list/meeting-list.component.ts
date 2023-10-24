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
  this.meeting[0] = new Meeting("Cars arriving",20,"20/11/2023","09:30",'11:30');
  this.meeting[1] = new Meeting("Check Cars specs",25,"29/11/2023","08:30","10:45");
  this.meeting[2] = new Meeting("Return unwanted cars",22,"30/11/2023","08:00","09:40");
  this.meeting[3] = new Meeting("Refurbish chosen cars",15,"8/12/2023","10:00","11:00");
  this.meeting[4] = new Meeting("Display cars to sell",17,"20/12/2023","10:30","11:30");
  }

}
