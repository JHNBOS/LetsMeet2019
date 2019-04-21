import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-calendar-popover',
  templateUrl: './calendar-popover.component.html',
  styleUrls: ['./calendar-popover.component.scss'],
})
export class CalendarPopoverComponent implements OnInit {
  selectedItem: string;

  constructor(private popoverController: PopoverController) {
  }

  ngOnInit() { }

  setOption(index: number) {
    this.popoverController.dismiss(index);
  }
}
