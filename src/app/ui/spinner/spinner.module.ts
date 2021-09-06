import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';



@NgModule({
  entryComponents:[SpinnerComponent],
  exports:[SpinnerComponent],
  declarations: [SpinnerComponent],
  imports: [
    CommonModule
  ]
})
export class SpinnerModule { }
