import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { APIResponse, Project } from '@ag-models';

@Injectable()
export class ProjectApiService {
	constructor(private http: HttpClient) {}

	// TODO: Get rid of this.
	getProjects(): Observable<Project[]> {
		return this.http
			.get<Project[]>('assets/data/projects.json')
			.pipe(catchError(() => []));
	}

	// TODO: replace getProjects with this method.
	fetchProjects(): Observable<APIResponse<Project[]>> {
		return this.http.get<Project[]>('assets/data/projects.json').pipe(
			map(projects => ({ data: projects })),
			catchError(error => of({ data: [], error }))
		);
	}

	getProjectDetails(projectId: string): Observable<APIResponse<Project>> {
		return this.getProjects().pipe(
			map(projects => {
				const projectIndex = projects.findIndex(
					project => project.id === projectId
				);
				return projects[projectIndex];
			}),
			map(project => ({ data: project })),
			catchError(error => of({ error }))
		);
	}
}
