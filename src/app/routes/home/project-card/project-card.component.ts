import { Component, OnInit, Input } from '@angular/core';
import { Project } from '@ag-models';

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
