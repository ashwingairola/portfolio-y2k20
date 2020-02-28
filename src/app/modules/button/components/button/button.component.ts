import { Component, OnInit, ElementRef, Input, Renderer2 } from '@angular/core';
import { ThemeColor } from 'src/app/modules/models/color.model';

@Component({
	selector: 'button [agButton], a [agButton]',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
	@Input() color: ThemeColor;
	hostElement: HTMLButtonElement | HTMLAnchorElement;

	constructor(private elementRef: ElementRef, private renderer: Renderer2) {
		this.hostElement = this.elementRef.nativeElement;
	}

	ngOnInit(): void {
		switch (this.color) {
			case 'primary':
				this.renderer.addClass(this.hostElement, 'bg-primary');
				this.renderer.addClass(this.hostElement, 'text-secondary');
				break;

			case 'secondary':
				this.renderer.addClass(this.hostElement, 'bg-secondary');
				this.renderer.addClass(this.hostElement, 'text-primary');
				break;

			default:
				break;
		}
	}
}
