import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MeetingService } from '../services/meeting.service';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.css']
})
export class CreateMeetingComponent {
 meetingForm!: FormGroup;

  isMeetingTopicInvalid: boolean = false;
  isMeetingDateInvalid: boolean = false;
  isMeetingTimeInvalid: boolean = false;
  isMeetingEndInvalid: boolean = false;
  isPartcipantsInvalid: boolean = false;

  constructor(private fb: FormBuilder, private meetingService: MeetingService){
    this.meetingForm = this.fb.group({
      meetingTopic: ['',[Validators.required]],
      Partcipants: ['',[Validators.required]],
      MeetingDate: ['',[Validators.required]],
      MeetingTime: ['',[Validators.required]],
      MeetingEnd: ['',[Validators.required]],
    });
  }


createMeeting(){
  console.log('New Meeting Created', this.meetingForm.value);
}
}
