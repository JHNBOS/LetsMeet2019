import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
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

  createEvent: boolean = false;
  group: Group = null;

  event: Event = null;
  eventDate: string;

  today: Date = new Date();
  start: string = this.today.toISOString();
  end: string = this.today.toISOString();

  constructor(private navParams: NavParams, private modal: ModalController, private eventService: EventService,
    private userService: UserService, private alertCtrl: AlertController) {
    let typeModal = this.navParams.get('type');

    if (typeModal === 'create') {
      this.uid = this.navParams.get('uid');
      this.group = this.navParams.get('group');
      this.createEvent = true;

      this.event = new Event();
      this.event.allDay = false;

      this.getUser();
    } else {
      this.event = this.navParams.get('event');
      this.eventDate = moment.unix(this.event.start.seconds).format('dddd D MMMM, HH:mm');
      this.eventDate += ` - ${moment.unix(this.event.end.seconds).format('HH:mm')}`;
    }
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
  }

  getUser() {
    console.log(this.uid);
    this.userService.getUser(this.uid).subscribe((response) => this.user = response);
  }

  submit() {
    this.event.createdBy = `${this.user.firstName} ${this.user.lastName}`;
    this.event.groupId = this.group.id;

    // Convert datetime strings to Date objects
    this.event.start = moment(this.start).toDate();
    this.event.end = moment(this.end).toDate();

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
