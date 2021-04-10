import { Component, Input, HostListener } from '@angular/core';
import {
	state,
	trigger,
	style,
	transition,
	animate
} from '@angular/animations';

@Component({
	selector: 'ag-menu-item',
	templateUrl: './menu-item.component.html',
	styleUrls: ['./menu-item.component.scss'],
	animations: [
		trigger('showHide', [
			state('*', style({ opacity: 1 })),
			state('void', style({ opacity: 0 })),
			transition('* <=> void', [animate('0.2s')])
		])
	]
})
export class MenuItemComponent {
	@Input() icon!: string;
	@Input() iconSize?: 'small' | 'medium' | 'large';
	hovering: boolean;

	constructor() {
		this.hovering = false;
	}

	@HostListener('mouseenter')
	onMouseEnter() {
		this.hovering = true;
	}

	@HostListener('mouseleave')
	onMouseLeave() {
		this.hovering = false;
	}
}
