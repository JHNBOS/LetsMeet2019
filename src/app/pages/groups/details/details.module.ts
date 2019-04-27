import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ContactSelectModule } from 'src/app/components/contact-select/contact-select.module';

import { GroupDetailsPage } from './details.page';

const routes: Routes = [
  {
    path: '',
    component: GroupDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactSelectModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GroupDetailsPage]
})
export class GroupDetailsPageModule { }
