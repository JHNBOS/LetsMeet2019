import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController, LoadingController, ModalController, NavParams, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/services/models/event';
import { Group } from 'src/app/services/models/group';
import { User } from 'src/app/services/models/user';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss'],
})
export class EventModalComponent implements OnInit {
  private uid: string;
  user: User = null;
  eventDetails: FormGroup;

  createEvent: boolean = false;
  group: Group = null;

  event: Event = null;
  eventDate: string;

  today: Date = new Date();
  start: string = this.today.toISOString();
  end: string = this.today.toISOString();
  displayFormat: string = 'DD-MM-YYYY HH:mm';
  pickerFormat: string = 'DD MMMM YYYY HH:mm';

  loader: any;
  toast: any;

  constructor(private navParams: NavParams, private modal: ModalController, private eventService: EventService,
    private formBuilder: FormBuilder, public _sanitizer: DomSanitizer, private storage: Storage, private alertController: AlertController,
    public toastController: ToastController, public loadingController: LoadingController) {

    this.getUser();
    let typeModal = this.navParams.get('type');
    this.group = this.navParams.get('group');

    if (typeModal === 'create') {
      this.uid = this.navParams.get('uid');
      this.createEvent = true;

      this.event = new Event();
    } else {
      this.event = this.navParams.get('event');

      this.event.startTime = moment.unix(this.event.start.seconds).toISOString();
      this.event.endTime = moment.unix(this.event.end.seconds).toISOString();

      if (this.event.allDay) {
        this.eventDate = `${moment.unix(this.event.start.seconds).format('dddd D MMMM')}`;
      } else {
        this.eventDate = `${moment.unix(this.event.start.seconds).format('dddd D MMMM, HH:mm')} - ${moment.unix(this.event.end.seconds).format('HH:mm')}`;
      }
    }
  }

  ngOnInit() {
    this.createFormGroup();
    this.init();
  }

  createFormGroup() {
    this.eventDetails = this.formBuilder.group({
      title: new FormControl('', {
        validators: Validators.compose([
          Validators.required
        ]), updateOn: 'change'
      }),
      description: new FormControl('', {
        validators: Validators.compose([]), updateOn: 'change'
      }),
      location: new FormControl('', {
        validators: Validators.compose([]), updateOn: 'change'
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

  init() {
    setTimeout(async () => {
      this.loader = await this.loadingController.create({
        spinner: 'crescent',
        message: 'Creating event...',
        translucent: true,
        backdropDismiss: false,
        showBackdrop: true,
        keyboardClose: true
      });
      this.toast = await this.toastController.create({
        message: 'Event was successfully created!',
        duration: 2000,
        position: 'bottom',
        showCloseButton: true
      });
    }, 0);
  }

  getUser() {
    this.storage.get('user').then((response) => this.user = response);
  }

  async checkTime() {
    let start = this.eventDetails.controls.start.value != null ? moment(this.eventDetails.controls.start.value) : null;
    let end = this.eventDetails.controls.end.value != null ? moment(this.eventDetails.controls.end.value) : null;

    if (start != null && end == null) {
      this.today = start.toDate();
    } else {
      this.today = new Date();
    }

    if (end != null && end.isBefore(start)) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'End of an event should be greater than the start date and time!',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  async deleteEvent() {
    const alert = await this.alertController.create({
      header: 'Delete',
      message: 'Are you sure you want to delete this event?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.eventService.deleteEvent(this.group.id, this.event.id).then(() => {
              this.modal.dismiss(true);
            });
          }
        },
        {
          text: 'No'
        }
      ]
    });
    await alert.present();
  }

  async submit() {
    let events = [];

    await this.loader.present();
    this.setValues();

    if (this.getDifferenceInDays(this.event) > 0) {
      events = this.checkMultiDayEvent(this.event);
    }

    if (events.length == 0) {
      this.eventService.addEvent(this.event).then(async (response) => {
        this.loadingController.dismiss();

        if (response) {
          await this.toast.present();
          this.modal.dismiss(true);
        }
      }, (error) => this.loadingController.dismiss());
    } else {
      for (let index = 0; index < events.length; index++) {
        let newEvent = events[index];
        this.eventService.addEvent(newEvent).then(async (response) => {
          if (index == events.length - 1) {
            this.loadingController.dismiss();

            if (response) {
              await this.toast.present();
              this.modal.dismiss(true);
            }
          }
        }, (error) => this.loadingController.dismiss());
      }
    }
  }

  close() {
    this.modal.dismiss(false);
  }

  setValues() {
    this.event.title = this.eventDetails.controls.title.value;
    this.event.description = this.eventDetails.controls.description.value;
    this.event.location = this.eventDetails.controls.location.value;
    this.event.allDay = this.eventDetails.controls.allDay.value;
    this.event.start = moment(this.eventDetails.controls.start.value).toDate();
    this.event.end = this.event.allDay == true ? this.event.start : moment(this.eventDetails.controls.end.value).toDate();

    this.event.createdBy = this.user;
    this.event.groupId = this.group.id;
  }

  checkMultiDayEvent(event: Event): Event[] {
    const events: Event[] = [];

    const startEvent = new Event();
    startEvent.id = '1';
    startEvent.title = event.title;
    startEvent.description = event.description;
    startEvent.allDay = event.allDay;
    startEvent.createdBy = event.createdBy;
    startEvent.location = event.location;
    startEvent.groupId = event.groupId;
    startEvent.start = moment(this.eventDetails.controls.start.value).toDate();
    startEvent.end = moment(this.eventDetails.controls.start.value).set({ 'hour': 23, 'minute': 59, 'second': 59, 'millisecond': 0 }).toDate();

    const endEvent = new Event();
    endEvent.id = '2';
    endEvent.title = event.title;
    endEvent.description = event.description;
    endEvent.allDay = event.allDay;
    endEvent.createdBy = event.createdBy;
    endEvent.location = event.location;
    endEvent.groupId = event.groupId;
    endEvent.start = moment(this.eventDetails.controls.end.value).set({ 'hour': 0, 'minute': 0, 'second': 1, 'millisecond': 0 }).toDate();
    endEvent.end = moment(this.eventDetails.controls.end.value).toDate();

    events.push(startEvent);
    events.push(endEvent);

    if (this.getDifferenceInDays(this.event) > 1) {
      for (let index = 1; index < this.getDifferenceInDays(this.event); index++) {
        const newEvent = new Event();
        newEvent.id = 'a' + index;
        newEvent.title = event.title;
        newEvent.description = event.description;
        newEvent.allDay = event.allDay;
        newEvent.createdBy = event.createdBy;
        newEvent.location = event.location;
        newEvent.groupId = event.groupId;
        newEvent.start = moment(this.eventDetails.controls.start.value).set({ 'date': event.start.getDate() + index, 'hour': 0, 'minute': 0, 'second': 1, 'millisecond': 0 }).toDate();
        newEvent.end = moment(this.eventDetails.controls.start.value).set({ 'date': event.start.getDate() + index, 'hour': 23, 'minute': 59, 'second': 59, 'millisecond': 0 }).toDate();

        events.push(newEvent);
      }
    }

    return events;
  }

  getDifferenceInDays(event: Event) {
    const diffTime = Math.abs(event.end.getTime() - event.start.getTime());
    const differenceInDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return differenceInDays;
  }

  setFormat(event: any) {
    let value = event.target.value;
    if (value == 'on') {
      this.displayFormat = 'DD-MM-YYYY';
      this.pickerFormat = 'DD MMMM YYYY';
    } else {
      this.displayFormat = 'DD-MM-YYYY HH:mm';
      this.pickerFormat = 'DD MMMM YYYY HH:mm';
    }
  }

}
