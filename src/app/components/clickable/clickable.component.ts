import { Component, HostListener } from '@angular/core';

@Component({
	selector: 'ag-clickable',
	template: ``,
	styles: [],
})
export class ClickableComponent {
	public hovering: boolean;
	public clicked: boolean;
	public touched: boolean;

	constructor() {
		this.hovering = false;
		this.clicked = false;
		this.touched = false;
	}

	@HostListener('mouseenter')
	onMouseEnter() {
		this.hovering = true;
		console.log('mouseenter');
	}

	@HostListener('mouseleave')
	onMouseLeave() {
		this.hovering = false;
		console.log('mouseleave');
		console.log(this.clicked, this.touched, this.hovering);
	}

	@HostListener('mousedown')
	onMouseDown() {
		this.clicked = true;
		console.log('mousedown');
	}

	@HostListener('mouseup')
	onMouseUp() {
		this.clicked = false;
		console.log('mouseup');
		console.log(this.clicked, this.touched, this.hovering);
	}

	@HostListener('touchstart')
	onTouchStart() {
		this.touched = true;
		console.log('touchstart');
	}

	@HostListener('touchend')
	onTouchEnd() {
		this.touched = false;
		console.log('touchend');
	}

	@HostListener('touchcancel')
	onTouchCancel() {
		this.touched = false;
		console.log('touchcancel');
	}
}
