import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepeatDirective } from './directives/repeat.directive';



@NgModule({
  declarations: [RepeatDirective],
  imports: [
    CommonModule
  ],
  exports: [RepeatDirective]
})
export class RepeatModule { }
