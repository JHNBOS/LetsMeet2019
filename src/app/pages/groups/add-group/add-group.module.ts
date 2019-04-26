import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ContactSelectModule } from 'src/app/components/contact-select/contact-select.module';

import { AddGroupPage } from './add-group.page';

const routes: Routes = [
  {
    path: '',
    component: AddGroupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ContactSelectModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [AddGroupPage]
})
export class AddGroupPageModule { }
