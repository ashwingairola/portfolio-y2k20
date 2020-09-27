import {
	Directive,
	HostListener,
	Input,
	OnInit,
	ElementRef
} from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import {
	ConnectedPosition,
	Overlay,
	OverlayPositionBuilder,
	OverlayRef
} from '@angular/cdk/overlay';

import { TooltipComponent } from '../components/tooltip/tooltip.component';

type TooltipPosition = 'left' | 'right' | 'bottom' | 'top';

@Directive({
	selector: '[agTooltip]'
})
export class TooltipDirective implements OnInit {
	@Input() agTooltip!: string;
	@Input() tooltipPosition: TooltipPosition = 'top';

	private overlayRef?: OverlayRef;
	private componentPortal?: ComponentPortal<TooltipComponent>;

	constructor(
		private elementRef: ElementRef,
		private overlayPositionBuilder: OverlayPositionBuilder,
		private overlay: Overlay
	) {}

	ngOnInit() {
		const positions = this.getPositions();

		const positionStrategy = this.overlayPositionBuilder
			.flexibleConnectedTo(this.elementRef)
			.withPositions([positions]);

		this.overlayRef = this.overlay.create({ positionStrategy });
	}

	@HostListener('mouseenter')
	show() {
		const tooltipPortal = new ComponentPortal(TooltipComponent);
		const tooltipRef = this.overlayRef?.attach(tooltipPortal);

		if (tooltipRef) {
			tooltipRef.instance.text = this.agTooltip;
		}
	}

	@HostListener('mouseleave')
	hide() {
		this.overlayRef?.detach();
	}

	private getPositions() {
		let position: ConnectedPosition;

		switch (this.tooltipPosition) {
			case 'right':
				position = {
					originX: 'end',
					originY: 'center',
					overlayX: 'start',
					overlayY: 'center'
				};
				break;

			case 'left':
				position = {
					originX: 'start',
					originY: 'center',
					overlayX: 'end',
					overlayY: 'center'
				};
				break;
			case 'bottom':
				position = {
					originX: 'center',
					originY: 'bottom',
					overlayX: 'center',
					overlayY: 'top'
				};
				break;
			case 'top':
			default:
				position = {
					originX: 'center',
					originY: 'top',
					overlayX: 'center',
					overlayY: 'bottom'
				};
		}

		return position;
	}
}
