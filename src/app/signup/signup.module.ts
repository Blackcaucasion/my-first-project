import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { SpinnerModule } from '../ui/spinner/spinner.module';


@NgModule({
  declarations: [SignupComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SignupRoutingModule,
    NavBarModule,
    SpinnerModule

  ]
})
export class SignupModule { }
