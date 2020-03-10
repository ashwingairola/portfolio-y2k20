import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
	selector: 'ag-menu-item',
	templateUrl: './menu-item.component.html',
	styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
	constructor(private container: ElementRef, private renderer: Renderer2) {}

	ngOnInit(): void {
		const el = this.container.nativeElement;
	}
}
