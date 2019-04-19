import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'groups',
        loadChildren: '../groups/groups.module#GroupsPageModule'
      },
      {
        path: 'profile',
        loadChildren: '../users/user-details/user-details.module#UserDetailsPageModule'
      },
      {
        path: '',
        redirectTo: '/home/groups',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: 'manage/:uid',
    loadChildren: '../users/user-manage/user-manage.module#UserManagePageModule'
  },
  {
    path: '',
    redirectTo: '/home/groups',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
