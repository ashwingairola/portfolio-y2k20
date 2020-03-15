import {
	Component,
	AfterViewInit,
	Input,
	ViewChild,
	ElementRef,
	Renderer2
} from '@angular/core';
import { ThemeColor } from '@ag-modules';

@Component({
	selector: 'ag-bottomnav',
	templateUrl: './bottomnav.component.html',
	styleUrls: ['./bottomnav.component.scss']
})
export class BottomnavComponent implements AfterViewInit {
	@Input() color!: ThemeColor;
	@ViewChild('bottomnavContainer') bottomnavContainer!: ElementRef<
		HTMLDivElement
	>;

	constructor(private renderer: Renderer2) {}

	ngAfterViewInit(): void {
		const container = this.bottomnavContainer.nativeElement;
		let bgClass: string;
		switch (this.color) {
			case 'primary':
				bgClass = 'bg-app-primary';
				break;

			case 'secondary':
				bgClass = 'bg-app-secondary';
				break;

			case 'warn':
				bgClass = 'bg-warn';
				break;

			default:
				bgClass = 'bg-navbar';
		}

		this.renderer.addClass(container, bgClass);
	}
}
