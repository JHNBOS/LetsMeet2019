import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    ReactiveFormsModule,
    IonicModule,
    NgCalendarModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents: [CalendarPopoverComponent, EventModalComponent],
  declarations: [CalendarPage, CalendarPopoverComponent, EventModalComponent]
})
export class CalendarPageModule { }
