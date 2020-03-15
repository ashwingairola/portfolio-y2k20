import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomnavComponent } from './components/bottomnav/bottomnav.component';
import { BottomnavItemComponent } from './components/bottomnav-item/bottomnav-item.component';



@NgModule({
  declarations: [BottomnavComponent, BottomnavItemComponent],
  imports: [
    CommonModule
  ],
  exports: [BottomnavComponent, BottomnavItemComponent]
})
export class BottomnavModule { }
