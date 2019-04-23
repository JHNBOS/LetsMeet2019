import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import { CalendarPopoverComponent } from 'src/app/components/calendar-popover/calendar-popover.component';
import { EventModalComponent } from 'src/app/components/event-modal/event-modal.component';
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
    private alertController: AlertController, private dataService: DataService, private modal: ModalController) {
    this.dataService.serviceData.subscribe((response) => this.group = response);
  }

  ionViewWillEnter() {
  }

  ngOnInit() {
    this.eventSource = [
      {
        title: 'Test',
        description: 'This is a test',
        location: 'Boomgaardsstraat 159, 3012XC Rotterdam',
        startTime: new Date(2019, 3, 21, 12, 0, 0),
        endTime: new Date(2019, 3, 21, 19, 30, 0),
        allDay: false,
        createdBy: 'Johan Bos'
      },
      {
        title: 'Test',
        description: 'This is a test',
        location: 'Boomgaardsstraat 159, 3012XC Rotterdam',
        startTime: new Date(2019, 3, 24, 12, 0, 0),
        endTime: new Date(2019, 3, 24, 19, 30, 0),
        allDay: false,
        createdBy: 'Johan Bos'
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
        componentProps: { event: event }
      }
    );
    modal.present();
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
