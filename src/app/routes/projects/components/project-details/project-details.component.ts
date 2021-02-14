import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';

import { APIResponse, Project } from '@ag-models';
import { ProjectApiService } from '@ag-apis';

@Component({
	selector: 'ag-project-details',
	templateUrl: './project-details.component.html',
	styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
	project$?: Observable<APIResponse<Project>>;

	constructor(
		private route: ActivatedRoute,
		private projectApi: ProjectApiService
	) {}

	ngOnInit(): void {
		this.project$ = this.route.paramMap.pipe(
			switchMap(params => {
				const projectId = params.get('projectId');

				if (!projectId) {
					return throwError('No project selected.');
				}

				return this.projectApi.getProjectDetails(projectId);
			})
		);

		// const newSub = this.project$.pipe(shareReplay)
	}
}
