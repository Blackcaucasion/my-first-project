import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { SpinnerModule } from '../ui/spinner/spinner.module';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ProfileRoutingModule,
    NavBarModule,
    SpinnerModule,
    MatIconModule,
    MatBadgeModule,
    
  ]
})
export class ProfileModule { }
