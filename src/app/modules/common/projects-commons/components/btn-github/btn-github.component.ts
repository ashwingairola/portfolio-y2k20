import { Component, OnInit, Input } from '@angular/core';

// TODO: Get rid of this component.
@Component({
	selector: 'ag-btn-github',
	templateUrl: './btn-github.component.html',
	styleUrls: ['./btn-github.component.scss']
})
export class BtnGithubComponent implements OnInit {
	@Input() githubRepo!: string;
	githubUrl = 'https://github.com';

	constructor() {}

	ngOnInit(): void {
		this.githubUrl += `/${this.githubRepo}`;
	}
}
