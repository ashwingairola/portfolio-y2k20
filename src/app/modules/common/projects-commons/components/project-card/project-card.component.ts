import { Project } from '@ag-models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'ag-project-card',
	templateUrl: './project-card.component.html',
	styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
	@Input() project!: Project;

	constructor() {}

	ngOnInit(): void {}
}
