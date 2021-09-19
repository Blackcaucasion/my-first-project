import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    NavBarModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class EmployeesModule { }
