import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersProfileRoutingModule } from './users-profile-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsersProfileComponent } from './users-profile.component';


@NgModule({
  declarations: [UsersProfileComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UsersProfileRoutingModule
  ]
})
export class UsersProfileModule { }
