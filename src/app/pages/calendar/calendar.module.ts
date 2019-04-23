import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgCalendarModule } from 'ionic2-calendar';
import { CalendarPopoverComponent } from 'src/app/components/calendar-popover/calendar-popover.component';
import { EventModalComponent } from 'src/app/components/event-modal/event-modal.component';

import { CalendarPage } from './calendar.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCalendarModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [CalendarPopoverComponent, EventModalComponent],
  declarations: [CalendarPage, CalendarPopoverComponent, EventModalComponent]
})
export class CalendarPageModule { }
