import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ThemeColor } from '../../models/color.model';

@Directive({
	selector: 'a[agExternalLink]'
})
export class ExternalLinkDirective implements OnInit {
	@Input() color: ThemeColor = 'none';

	constructor(private elementRef: ElementRef<HTMLAnchorElement>) {}

	ngOnInit() {
		this.setColor();
		this.setTargetToExternal();
	}

	private setColor() {
		const el = this.elementRef.nativeElement;

		switch (this.color) {
			case 'primary':
				el.classList.add('text-app-primary');
				break;

			case 'secondary':
				el.classList.add('text-app-secondary');
				break;
		}
	}

	private setTargetToExternal() {
		const el = this.elementRef.nativeElement;
		el.setAttribute('target', '_blank');
		el.setAttribute('rel', 'noreferrer');
	}
}
