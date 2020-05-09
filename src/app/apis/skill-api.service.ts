import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Skill } from '@ag-models';

@Injectable()
export class SkillApiService {
	constructor(private http: HttpClient) {}

	getProjects(): Observable<Skill[]> {
		return this.http
			.get<Skill[]>('assets/data/skills.json')
			.pipe(catchError(() => []));
	}
}
