import {
	Component,
	Input,
	ViewChild,
	ElementRef,
	AfterViewInit
} from '@angular/core';

@Component({
	selector: 'ag-hero-pic',
	templateUrl: './hero-pic.component.html',
	styleUrls: ['./hero-pic.component.scss']
})
export class HeroPicComponent implements AfterViewInit {
	@Input() imgUrl: string;
	@ViewChild('imgDiv') imgDiv!: ElementRef<HTMLDivElement>;

	constructor() {
		this.imgUrl = '';
	}

	ngAfterViewInit() {
		const imgEl = this.imgDiv.nativeElement;
		imgEl.style.backgroundImage = `url("${this.imgUrl}")`;
	}
}
