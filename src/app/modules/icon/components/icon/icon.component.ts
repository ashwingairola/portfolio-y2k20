import {
	Component,
	OnInit,
	Input,
	AfterViewInit,
	ElementRef,
	Renderer2
} from '@angular/core';
import {
	faHome,
	faCode,
	faPalette,
	faPhone,
	faFileAlt
} from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'ag-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit, AfterViewInit {
	@Input() icon!: string;
	@Input() iconSize: 'small' | 'medium' | 'large';

	faHome = faHome;
	faCode = faCode;
	faPalette = faPalette;
	faPhone = faPhone;
	faFileAlt = faFileAlt;

	constructor(private container: ElementRef, private renderer: Renderer2) {
		this.iconSize = 'small';
	}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		const el = this.container.nativeElement;
		let fontClass: string;

		switch (this.iconSize) {
			case 'small':
				fontClass = 'text-base';
				break;

			case 'medium':
				fontClass = 'text-2xl';
				break;

			case 'large':
				fontClass = 'text-4xl';
				break;

			default:
				fontClass = 'text-base';
		}

		this.renderer.addClass(el, fontClass);
	}
}
