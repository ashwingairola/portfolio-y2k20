import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';



@NgModule({
  declarations: [TestimonialsComponent],
  imports: [
    CommonModule
  ],
  exports: [TestimonialsComponent]
})
export class TestimonialsModule { }
