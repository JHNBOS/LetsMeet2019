import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import * as moment from 'moment';
import { Event } from 'src/app/services/models/event';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss'],
})
export class EventModalComponent implements OnInit {
  event: Event;
  eventDate: string;

  constructor(private navParams: NavParams, private modal: ModalController) {
    this.event = this.navParams.get('event');

    // Convert start and end to string
    this.eventDate = moment(this.event.startTime).format('dddd D MMMM, HH:mm');
    this.eventDate += ` - ${moment(this.event.endTime).format('HH:mm')}`;
  }

  ngOnInit() { }

  close() {
    this.modal.dismiss();
  }

}
