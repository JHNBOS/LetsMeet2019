import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import * as moment from 'moment';
import { CalendarPopoverComponent } from 'src/app/components/calendar-popover/calendar-popover.component';
import { EventModalComponent } from 'src/app/components/event-modal/event-modal.component';
import { DataService } from 'src/app/services/data.service';
import { EventService } from 'src/app/services/event.service';
import { AuthenticationService } from 'src/app/services/helpers/authentication.service';
import { Group } from 'src/app/services/models/group';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit, AfterViewInit {
  authUser: firebase.User;
  group: Group = null;

  @ViewChild(CalendarComponent) calendarComponent: CalendarComponent;
  calendar = {
    mode: 'month',
    currentDate: new Date(),
    lockSwipeToPrev: true,
    queryMode: 'remote'
  };

  isToday: boolean;
  currentMonth: boolean;

  eventSource = [];
  viewTitle: any = new Date().toLocaleString("en", { month: "long" });

  constructor(private popoverController: PopoverController, private dataService: DataService, private eventService: EventService,
    private authenticationService: AuthenticationService, private modal: ModalController) {
    this.dataService.serviceData.subscribe((response) => this.group = response);
    this.authUser = this.authenticationService.getUserAuth();
  }

  ngOnInit() {
    this.getEvents();
  }

  ngAfterViewInit() {
    setTimeout(() => this.calendarComponent.loadEvents(), 1000);
  }

  getEvents() {
    this.eventService.getEvents(this.group.id).subscribe((response) => {
      this.eventSource = response;
    });
  }

  async showPopOver(event: any) {
    const popover = await this.popoverController.create({
      component: CalendarPopoverComponent,
      animated: true,
      showBackdrop: false,
      translucent: true,
      event: event,
      cssClass: 'pop-over-style'
    });

    popover.onDidDismiss().then((data) => {
      let choice = data.data;
      switch (choice) {
        case 1:
          this.changeMode('day');
          break;
        case 2:
          this.changeMode('week');
          break;
        case 3:
          this.changeMode('month');
          break;
      }
    });

    return await popover.present();
  }

  changeMode(mode) {
    this.calendar.mode = mode;
  }

  today() {
    // Enable swipe to previous month
    this.calendar.lockSwipeToPrev = false;

    // Set date to today
    this.isToday = true;
    this.currentMonth = true;
    this.calendar.currentDate = new Date();

    // Disable swipe to previous month
    this.calendar.lockSwipeToPrev = true;
  }

  onCurrentDateChanged(event: Date) {
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);

    this.isToday = today.getTime() === event.getTime();
    this.currentMonth = today.getUTCMonth() === event.getUTCMonth();

    if (this.calendar.mode === 'month') {
      if (this.currentMonth) {
        this.calendar.lockSwipeToPrev = true;
      } else {
        this.calendar.lockSwipeToPrev = false;
      }
    } if (this.calendar.mode === 'week') {
      if (moment(event).isoWeek() <= moment(today).isoWeek()) {
        this.calendar.lockSwipeToPrev = false;
      } else {
        this.calendar.lockSwipeToPrev = true;
      }
    } else {
      if (event.getDate() <= today.getDate()) {
        this.calendar.lockSwipeToPrev = true;
      } else {
        this.calendar.lockSwipeToPrev = false;
      }
    }
  }

  async onEventSelected(event) {
    const modal = await this.modal.create(
      {
        component: EventModalComponent,
        showBackdrop: true,
        backdropDismiss: true,
        componentProps: { type: 'details', group: this.group, event: event }
      }
    );

    modal.onDidDismiss().then(data => {
      if (data['data'] == true) {
        this.getEvents();
        setTimeout(() => this.calendarComponent.loadEvents(), 1000);
      }
    });

    modal.present();
  }

  async createEvent() {
    const modal = await this.modal.create(
      {
        component: EventModalComponent,
        showBackdrop: true,
        backdropDismiss: true,
        componentProps: { type: 'create', group: this.group, uid: this.authUser.uid }
      }
    );

    modal.onDidDismiss().then(data => {
      if (data['data'] == true) {
        this.getEvents();
        setTimeout(() => this.calendarComponent.loadEvents(), 1000);
      }
    });

    modal.present();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
}
