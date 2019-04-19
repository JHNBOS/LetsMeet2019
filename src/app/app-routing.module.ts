import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: '', canActivate: [AuthGuard], loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'home', canActivate: [AuthGuard], loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'sign-in', loadChildren: './pages/sign-in/sign-in.module#SignInPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'forgot-password', loadChildren: './pages/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: '**', redirectTo: 'home' },
  { path: 'user-details', canActivate: [AuthGuard], loadChildren: './pages/users/user-details/user-details.module#UserDetailsPageModule' },
  { path: 'user-manage/:uid', canActivate: [AuthGuard], loadChildren: './pages/users/user-manage/user-manage.module#UserManagePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


