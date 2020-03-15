import { Component } from '@angular/core';
import {
	trigger,
	state,
	style,
	animate,
	transition
} from '@angular/animations';
import { ClickableComponent } from 'src/app/components/clickable/clickable.component';

@Component({
	selector: 'ag-menu-item',
	templateUrl: './menu-item.component.html',
	styleUrls: ['./menu-item.component.scss'],
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
export class MenuItemComponent extends ClickableComponent {
	constructor() {
		super();
	}
}
