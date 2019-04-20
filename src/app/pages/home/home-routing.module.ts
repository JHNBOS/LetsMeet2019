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
				loadChildren: '../users/user-details/user-details.module#UserDetailsPageModule'
			},
			{
				path: '',
				redirectTo: '/home/groups',
				pathMatch: 'full',
			},
		]
	},
	{ path: 'user-details', canActivate: [AuthGuard], loadChildren: '../users/user-details/user-details.module#UserDetailsPageModule' },
	{ path: 'user-manage', canActivate: [AuthGuard], loadChildren: '../users/user-manage/user-manage.module#UserManagePageModule' },
	{ path: 'add-group', canActivate: [AuthGuard], loadChildren: '../groups/add-group/add-group.module#AddGroupPageModule' },
	{ path: 'contacts', canActivate: [AuthGuard], loadChildren: '../contacts/contacts.module#ContactsPageModule' },
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


