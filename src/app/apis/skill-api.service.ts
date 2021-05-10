import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { APIResponse, ESkillType, Skill } from '@ag-models';

@Injectable({
	providedIn: 'root'
})
export class SkillApiService {
	constructor(private http: HttpClient) {}

	getProjects(): Observable<Skill[]> {
		return this.http
			.get<Skill[]>('assets/data/skills/basics.json')
			.pipe(catchError(() => []));
	}

	getSkillsByType(type: ESkillType): Observable<APIResponse<Skill[]>> {
		return this.http.get<Skill[]>(`assets/data/skills/${type}.json`).pipe(
			map(response => ({ data: response })),
			catchError(error => of({ data: [], error }))
		);
	}
}
