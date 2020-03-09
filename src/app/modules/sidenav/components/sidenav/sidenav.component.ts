import {
	Component,
	OnInit,
	Input,
	AfterViewInit,
	Renderer2,
	ViewChild,
	ElementRef
} from '@angular/core';
import { ThemeColor } from 'src/app/modules/models/color.model';

@Component({
	selector: 'ag-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {
	@Input() color!: ThemeColor;
	@ViewChild('navbarContainer') navbarContainer!: ElementRef<HTMLDivElement>;

	constructor(private renderer: Renderer2) {
		this.color = 'none';
	}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		const container = this.navbarContainer.nativeElement;
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
