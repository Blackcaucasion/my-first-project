import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/gaurds/auth.service';
import { AdminGaurd } from './shared/gaurds/admin.service';
import { ManagerGaurd } from './shared/gaurds/manager.service';
const routes: Routes = [
  {
    path: 'login',

    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'sign-up',

    loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard]

  },
  {
    path: 'employees',
    loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule),
    canActivate: [AuthGuard, AdminGaurd]
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./users-profile/users-profile.module').then(m => m.UsersProfileModule),
    // canActivate: [AuthGuard, ManagerGaurd]

  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
