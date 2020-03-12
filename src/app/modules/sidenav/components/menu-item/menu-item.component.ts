import { Component, OnInit, HostListener } from '@angular/core';
import {
	trigger,
	state,
	style,
	animate,
	transition
} from '@angular/animations';

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
            state('*', style({opacity: 0})),
            state('active', style({opacity: 1})),
            transition('* <=> active', [animate('0.2s')])
        ])
	]
})
export class MenuItemComponent implements OnInit {
    hovering: boolean;
    clicked: boolean;

	constructor() {
        this.hovering = false;
        this.clicked = false;
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
    
    @HostListener('mousedown')
    onMouseDown() {
        this.clicked = true;
    }

    @HostListener('mouseup')
    onMouseUp() {
        this.clicked = false;
    }
}
