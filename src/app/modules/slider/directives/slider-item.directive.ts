import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[agSliderItem]'
})
export class SliderItemDirective {
	elementRef: ElementRef<any>;

	constructor(elementRef: ElementRef) {
		this.elementRef = elementRef;
	}
}
