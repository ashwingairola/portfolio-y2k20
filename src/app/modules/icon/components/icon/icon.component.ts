import {
	Component,
	OnInit,
	Input,
	AfterViewInit,
	ElementRef,
	Renderer2,
} from '@angular/core';
import {
	faHome,
	faCode,
	faPalette,
	faPhone,
	faFileAlt,
	faMapMarkerAlt,
	faBriefcase,
	faArrowLeft,
	faArrowRight,
	faLink,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ThemeColor } from 'src/app/modules/models/color.model';

@Component({
	selector: 'ag-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit, AfterViewInit {
	@Input() icon!: string;
	@Input() iconSize: 'small' | 'medium' | 'large';
	@Input() color: ThemeColor;

	// Solid Icons
	faHome = faHome;
	faCode = faCode;
	faPalette = faPalette;
	faPhone = faPhone;
	faFileAlt = faFileAlt;
	faMapMarkerAlt = faMapMarkerAlt;
	faBriefcase = faBriefcase;
	faArrowLeft = faArrowLeft;
	faArrowRight = faArrowRight;
	faLink = faLink;

	// Brand Icons
	faGithub = faGithub;

	constructor(private container: ElementRef, private renderer: Renderer2) {
		this.iconSize = 'small';
		this.color = 'primary';
	}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		const el = this.container.nativeElement;
		const fontClass = this.getFontClass();
		const colorClass = this.getColorClass();

		this.renderer.addClass(el, fontClass);
		this.renderer.addClass(el, colorClass);
	}

	private getFontClass(): string {
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

		return fontClass;
	}

	private getColorClass(): string {
		let colorClass: string;

		switch (this.color) {
			case 'primary':
				colorClass = 'text-primary';
				break;

			case 'secondary':
				colorClass = 'text-secondary';
				break;

			case 'warn':
				colorClass = 'text-warn';
				break;

			case 'bgPrimary':
				colorClass = 'text-app-primary';
				break;

			case 'bgSecondary':
				colorClass = 'text-app-secondary';
				break;

			default:
				colorClass = 'text-primary';
				break;
		}

		return colorClass;
	}
}
