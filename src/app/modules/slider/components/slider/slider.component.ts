import {
	Component,
	ViewChild,
	ElementRef,
	AfterViewInit,
	ContentChildren,
	QueryList,
	AfterContentInit,
	Renderer2
} from '@angular/core';
import Glide from '@glidejs/glide';
import { SliderItemDirective } from '../../directives/slider-item.directive';

@Component({
	selector: 'ag-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit, AfterContentInit {
	@ViewChild('glide', { static: true }) glide!: ElementRef<HTMLDivElement>;
	@ContentChildren(SliderItemDirective) sliderItems!: QueryList<
		SliderItemDirective
	>;

	constructor(private renderer: Renderer2) {}

	ngAfterViewInit(): void {
		const glideObj = new Glide(this.glide.nativeElement, {
			perView: 4,
			// rewind: false,
			// bound: true,
			breakpoints: {
				640: {
					perView: 1.5
				},
				768: {
					perView: 2.5
				},
				1024: {
					perView: 3
				},
				1280: {
					perView: 4
				},
				1440: {
					perView: 5
				},
				1920: {
					perView: 4
				},
				2560: {
					perView: 8
				},
				3840: {
					perView: 12
				}
			}
		});

		glideObj.mount();
	}

	ngAfterContentInit(): void {
		this.sliderItems.forEach(sliderItem => {
			const element = sliderItem.elementRef.nativeElement;
			this.renderer.addClass(element, 'glide__slide');
		});
	}
}
