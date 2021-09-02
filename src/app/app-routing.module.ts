import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AurthGuard } from './shared/gaurds/aurth.guard';
import { AdminGuard } from './shared/gaurds/admin.guard';
import { ManagerGuard } from './shared/gaurds/manager.guard';
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
    canActivate: [AurthGuard]

  },
  {
    path: 'employees',
    loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./users-profile/users-profile.module').then(m => m.UsersProfileModule),
    canActivate: [ManagerGuard]

  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  providers: [AurthGuard, AdminGuard, ManagerGuard]
})
export class AppRoutingModule { }
