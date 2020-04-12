import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ag-btn-project-link',
	templateUrl: './btn-project-link.component.html',
	styleUrls: ['./btn-project-link.component.scss'],
})
export class BtnProjectLinkComponent implements OnInit {
	@Input() liveUrl!: string;

	constructor() {}

	ngOnInit(): void {}
}
