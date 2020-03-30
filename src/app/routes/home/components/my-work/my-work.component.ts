import { Component, OnInit } from '@angular/core';
import { ProjectApiService } from '@ag-apis';
import { Project } from '@ag-models';

@Component({
	selector: 'ag-my-work',
	templateUrl: './my-work.component.html',
	styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {
	projects?: Project[];

	constructor(private projectApi: ProjectApiService) {}

	ngOnInit(): void {
		this.projectApi.getProjects().subscribe(projects => {
			this.projects = projects;
		});
	}
}
