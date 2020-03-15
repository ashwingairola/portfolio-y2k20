import { Component, HostListener } from '@angular/core';

@Component({
	selector: 'ag-clickable',
	template: ``,
	styles: []
})
export class ClickableComponent {
	public hovering: boolean;
	public clicked: boolean;

	constructor() {
		this.hovering = false;
		this.clicked = false;
	}

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
