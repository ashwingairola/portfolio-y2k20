import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Project } from '@ag-models';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectApiService {
	constructor(private http: HttpClient) {}

	getProjects(): Observable<Project[]> {
		return this.http
			.get<Project[]>('assets/data/projects.json')
			.pipe(catchError(() => []));
	}
}
