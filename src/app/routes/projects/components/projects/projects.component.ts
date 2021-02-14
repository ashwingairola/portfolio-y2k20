import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { APIResponse, Project } from '@ag-models';
import { ProjectApiService } from '@ag-apis';

@Component({
	selector: 'ag-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
	projects$?: Observable<APIResponse<Project[]>>;

	constructor(private projectApiService: ProjectApiService) {}

	ngOnInit(): void {
		this.projects$ = this.projectApiService.fetchProjects();
	}
}
