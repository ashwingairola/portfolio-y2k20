import { Component, OnInit, HostListener, Input } from '@angular/core';
import {
	state,
	trigger,
	style,
	transition,
	animate
} from '@angular/animations';

@Component({
	selector: 'ag-sidenav-item',
	templateUrl: './sidenav-item.component.html',
	styleUrls: ['./sidenav-item.component.scss'],
	animations: [
		trigger('showHide', [
			state('*', style({ opacity: 1 })),
			state('void', style({ opacity: 0 })),
			transition('* <=> void', [animate('0.2s')])
		])
	]
})
export class SidenavItemComponent implements OnInit {
	@Input() icon!: string;
	hovering: boolean;

	constructor() {
		this.hovering = false;
	}

	ngOnInit(): void {}

	@HostListener('mouseenter')
	onMouseEnter() {
		this.hovering = true;
	}

	@HostListener('mouseleave')
	onMouseLeave() {
		this.hovering = false;
	}
}
