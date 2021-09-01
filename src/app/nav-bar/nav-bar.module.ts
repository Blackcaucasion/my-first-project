import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavBarComponent } from './nav-bar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterModule} from '@angular/router';


@NgModule({
  entryComponents:[NavBarComponent],
  exports:[NavBarComponent],
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    RouterModule,

  ]
})
export class NavBarModule { }
