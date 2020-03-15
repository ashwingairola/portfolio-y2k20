import {
	Component,
	HostListener,
	EventEmitter,
	ElementRef
} from '@angular/core';

@Component({
	selector: 'ag-clickable',
	template: ``,
	styles: []
})
export class ClickableComponent {
	public hovering: boolean;
	public clicked: boolean;
	public touched: boolean;
	public click: EventEmitter<MouseEvent>;

	constructor(private element: ElementRef) {
		this.hovering = false;
		this.clicked = false;
		this.touched = false;
		this.click = new EventEmitter();
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

	@HostListener('touchstart')
	onTouchStart() {
		console.log('TOUCHED');
		this.touched = true;
	}

	@HostListener('touchend')
	onTouchEnd() {
		console.log('NOT TOUCHING');
		this.touched = false;
		this.element.nativeElement.click();
		return false;
	}
}
