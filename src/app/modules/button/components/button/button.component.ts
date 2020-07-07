import { Component, OnInit, ElementRef, Input, Renderer2 } from '@angular/core';
import { ThemeColor } from 'src/app/modules/models/color.model';
import {
	trigger,
	state,
	style,
	transition,
	animate,
	keyframes
} from '@angular/animations';
import { ClickableComponent } from 'src/app/components/clickable/clickable.component';

const BUTTON_HOST_ATTRIBUTES = [
	'ag-button',
	'ag-round-button',
	'ag-icon-button'
];
const BUTTON_ATTRIBUTE_CLASS_MAP: Map<string, string> = new Map([
	['ag-button', 'ag-button'],
	['ag-round-button', 'ag-round-button'],
	['ag-icon-button', 'ag-icon-button']
]);

@Component({
	selector:
		'button[ag-button], a[ag-button], button[ag-round-button], a[ag-round-button], button[ag-icon-button], a[ag-icon-button]',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
	animations: [
		trigger('onActive', [
			state('*', style({ opacity: 0 })),
			state('active', style({ opacity: 0.5 })),
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

		this.decideButtonType();
	}

	private decideButtonType() {
		const hasButtonAttribute = BUTTON_HOST_ATTRIBUTES.some(attr =>
			this.hostElement.hasAttribute(attr)
		);

		if (hasButtonAttribute) {
			const buttonAttribute = BUTTON_HOST_ATTRIBUTES.filter(attr =>
				this.hostElement.hasAttribute(attr)
			)[0];

			this.renderer.addClass(
				this.hostElement,
				BUTTON_ATTRIBUTE_CLASS_MAP.get(buttonAttribute) || 'ag-button'
			);
		}
	}
}
