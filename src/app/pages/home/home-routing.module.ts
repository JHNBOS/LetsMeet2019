import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../guards/auth.guard';
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
				loadChildren: '../users/details/details.module#UserDetailsPageModule'
			},
			{
				path: 'contacts',
				loadChildren: '../contacts/contacts.module#ContactsPageModule'
			},
			{
				path: '',
				redirectTo: '/home/groups',
				pathMatch: 'full',
			},
		]
	},
	{
		path: 'user',
		children: [
			{
				path: 'details',
				loadChildren: '../users/details/details.module#UserDetailsPageModule'
			},
			{
				path: 'manage',
				loadChildren: '../users/manage/manage.module#UserManagePageModule'
			}
		]
	},
	{
		path: 'group',
		children: [
			{
				path: 'details',
				loadChildren: '../groups/details/details.module#GroupDetailsPageModule'
			},
			{
				path: 'add',
				loadChildren: '../groups/add/add.module#AddGroupPageModule'
			}
		]
	},
	{ path: 'contacts', canActivate: [AuthGuard], loadChildren: '../contacts/contacts.module#ContactsPageModule' },
	{ path: 'calendar', canActivate: [AuthGuard], loadChildren: '../calendar/calendar.module#CalendarPageModule' },
	{
		path: '',
		redirectTo: '/home/groups',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class HomeRoutingModule { }


