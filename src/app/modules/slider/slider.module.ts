import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from '../button/button.module';

import { SliderComponent } from './components/slider/slider.component';
import { SliderItemDirective } from './directives/slider-item.directive';

@NgModule({
	declarations: [SliderComponent, SliderItemDirective],
	imports: [CommonModule, ButtonModule],
	exports: [SliderComponent, SliderItemDirective]
})
export class SliderModule {}
