import {
	Component,
	OnInit,
	ViewChild,
	ElementRef,
	AfterViewInit
} from '@angular/core';
import Glide from '@glidejs/glide';

@Component({
	selector: 'ag-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {
	@ViewChild('glide', { static: true }) glide!: ElementRef<HTMLDivElement>;

	constructor() {}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
        const glideObj = new Glide(this.glide.nativeElement).mount();
    }
}
