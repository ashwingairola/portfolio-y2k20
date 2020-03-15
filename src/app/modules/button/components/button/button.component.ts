import { Component, OnInit, ElementRef, Input, Renderer2 } from '@angular/core';
import { ThemeColor } from 'src/app/modules/models/color.model';
import {
	trigger,
	state,
	style,
	transition,
	animate
} from '@angular/animations';
import { ClickableComponent } from 'src/app/components/clickable/clickable.component';

@Component({
	selector: 'button [agButton], a [agButton]',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
	animations: [
		trigger('showOnHover', [
			state('*', style({ opacity: 0 })),
			state('hover', style({ opacity: 0.5 })),
			transition('* <=> hover', [animate('0.2s')])
		]),
		trigger('onActive', [
			state('*', style({ opacity: 0 })),
			state('active', style({ opacity: 0.7 })),
			transition('* <=> active', [animate('0.2s')])
		])
	]
})
export class ButtonComponent extends ClickableComponent implements OnInit {
	@Input() color: ThemeColor;
	hostElement: HTMLButtonElement | HTMLAnchorElement;

	constructor(private elementRef: ElementRef, private renderer: Renderer2) {
		super();

		this.color = 'none';
		this.hostElement = this.elementRef.nativeElement;
	}

	ngOnInit(): void {
		switch (this.color) {
			case 'primary':
				this.renderer.addClass(this.hostElement, 'bg-primary');
				this.renderer.addClass(this.hostElement, 'text-secondary');
				break;

			case 'secondary':
				this.renderer.addClass(this.hostElement, 'bg-secondary');
				this.renderer.addClass(this.hostElement, 'text-primary');
				break;

			default:
				break;
		}
	}
}
