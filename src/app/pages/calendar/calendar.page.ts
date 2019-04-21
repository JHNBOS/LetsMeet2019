import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';
import * as moment from 'moment';
import { CalendarPopoverComponent } from 'src/app/components/calendar-popover/calendar-popover.component';
import { DataService } from 'src/app/services/data.service';
import { Group } from 'src/app/services/models/group';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  eventSource;
  group: Group = null;
  isToday: boolean;
  viewTitle: any = new Date().toLocaleString("en", { month: "long" });
  calendar = {
    mode: 'month',
    currentDate: new Date(),
    lockSwipeToPrev: true
  };

  constructor(private router: Router, private popoverController: PopoverController,
    private alertController: AlertController, private dataService: DataService) {
    this.dataService.serviceData.subscribe((response) => this.group = response);
  }

  ionViewWillEnter() {
  }

  ngOnInit() {
    this.eventSource = [
      {
        title: 'Test',
        desc: 'This is a test',
        startTime: new Date(2019, 3, 21, 12, 0, 0),
        endTime: new Date(2019, 3, 21, 19, 30, 0),
        allDay: false
      },
      {
        title: 'Test',
        desc: 'This is a test',
        startTime: new Date(2019, 3, 24, 12, 0, 0),
        endTime: new Date(2019, 3, 24, 19, 30, 0),
        allDay: false
      }
    ];
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
        case 0:
          this.today();
          break;
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
    this.isToday = true;
    this.calendar.currentDate = new Date();
  }

  onCurrentDateChanged(event: Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();

    if (this.calendar.mode === 'month') {
      if (event.getFullYear() < today.getFullYear() || (event.getFullYear() === today.getFullYear() && event.getMonth() <= today.getMonth())) {
        this.calendar.lockSwipeToPrev = true;
      } else if (event.getFullYear() < today.getFullYear() || (event.getFullYear() === today.getFullYear() && event.getMonth() <= today.getMonth())) {
        this.calendar.lockSwipeToPrev = false;
      }
    }
  }

  async onEventSelected(event) {
    const alert = await this.alertController.create({
      header: event.title,
      subHeader: event.desc,
      message: `
        <hr style="margin:0;border-bottom: 1px solid #8e8e8e;margin-bottom: 6px;">
        <p style="margin:0;">Starts:&ensp;${moment(event.startTime).format('ddd D MMM [at] HH:mm')}</p>
        <p style="margin:0;">Ends:&emsp;${moment(event.endTime).format('ddd D MMM [at] HH:mm')}</p>
      `,
      buttons: ['Close']
    });

    await alert.present();
  }

  reloadSource(startTime, endTime) {
  }

  onTimeSelected(event) {
    console.log('Selected time: ' + event.selectedTime + ', hasEvents: ' +
      (event.events !== undefined && event.events.length !== 0) + ', disabled: ' + event.disabled);
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onRangeChanged(event) {
    console.log('range changed: startTime: ' + event.startTime + ', endTime: ' + event.endTime);
  }
}
