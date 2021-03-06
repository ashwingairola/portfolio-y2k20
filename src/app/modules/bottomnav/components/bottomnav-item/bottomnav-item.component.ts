// TODO: Merge this with SidenavItemComponent.

import { Component } from '@angular/core';
import { ClickableComponent } from 'src/app/components/clickable/clickable.component';
import {
	trigger,
	state,
	style,
	transition,
	animate
} from '@angular/animations';

@Component({
	selector: 'a[ag-bottomnav-item]',
	templateUrl: './bottomnav-item.component.html',
	styleUrls: ['./bottomnav-item.component.scss'],
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
export class BottomnavItemComponent extends ClickableComponent {
	constructor() {
		super();
	}
}
