import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ag-card-image',
	templateUrl: './card-image.component.html',
	styleUrls: ['./card-image.component.scss']
})
export class CardImageComponent implements OnInit {
	@Input() src!: string;
	@Input() alt: string;

	constructor() {
		this.alt = '';
	}

	ngOnInit(): void {}
}
