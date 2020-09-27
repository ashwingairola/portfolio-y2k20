import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'ag-tooltip',
	templateUrl: './tooltip.component.html',
	styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
	@Input() text = '';

	constructor() {}

	ngOnInit(): void {}
}
