import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import * as moment from 'moment';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/services/models/event';
import { Group } from 'src/app/services/models/group';
import { User } from 'src/app/services/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss'],
})
export class EventModalComponent implements OnInit {
  private uid: string;
  private user: User = null;
  eventDetails: FormGroup;

  createEvent: boolean = false;
  group: Group = null;

  event: Event = null;
  eventDate: string;

  today: Date = new Date();
  start: string = this.today.toISOString();
  end: string = this.today.toISOString();

  constructor(private navParams: NavParams, private modal: ModalController, private eventService: EventService,
    private userService: UserService, private formBuilder: FormBuilder) {
    let typeModal = this.navParams.get('type');

    if (typeModal === 'create') {
      this.uid = this.navParams.get('uid');
      this.group = this.navParams.get('group');
      this.createEvent = true;

      this.event = new Event();
      this.getUser();
    } else {
      this.event = this.navParams.get('event');

      this.event.startTime = moment.unix(this.event.start.seconds).toISOString();
      this.event.endTime = moment.unix(this.event.end.seconds).toISOString();
      this.eventDate = `${moment.unix(this.event.start.seconds).format('dddd D MMMM, HH:mm')} - ${moment.unix(this.event.end.seconds).format('HH:mm')}`;
    }
  }

  ngOnInit() {
    this.createFormGroup();
  }

  createFormGroup() {
    this.eventDetails = this.formBuilder.group({
      title: new FormControl('', {
        validators: Validators.compose([
          Validators.required
        ]), updateOn: 'change'
      }),
      description: new FormControl('', {
        validators: Validators.compose([
          Validators.required
        ]), updateOn: 'change'
      }),
      location: new FormControl('', {
        validators: Validators.compose([
          Validators.required,
        ]), updateOn: 'change'
      }),
      allDay: new FormControl(false, {
        validators: Validators.compose([
          Validators.required,
        ]), updateOn: 'change'
      }),
      start: new FormControl(this.start, {
        validators: Validators.compose([
          Validators.required,
        ]), updateOn: 'change'
      }),
      end: new FormControl(this.end, {
        validators: Validators.compose([
          Validators.required,
        ]), updateOn: 'change'
      }),
    });
  }

  getUser() {
    this.userService.getUser(this.uid).subscribe((response) => this.user = response);
  }

  submit() {
    // Set form control values to event object
    this.event.title = this.eventDetails.controls.title.value;
    this.event.description = this.eventDetails.controls.description.value;
    this.event.location = this.eventDetails.controls.location.value;
    this.event.allDay = this.eventDetails.controls.allDay.value;
    this.event.start = moment(this.eventDetails.controls.start.value).toDate();
    this.event.end = moment(this.eventDetails.controls.end.value).toDate();

    this.event.createdBy = `${this.user.firstName} ${this.user.lastName}`;
    this.event.groupId = this.group.id;

    this.eventService.addEvent(this.event).then((response) => {
      if (response) {
        this.close();
      }
    });
  }

  close() {
    this.modal.dismiss();
  }

}
