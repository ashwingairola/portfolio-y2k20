import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { APIResponse, Testimonial } from '@ag-models';

@Injectable()
export class TestimonialApiService {
	constructor(private http: HttpClient) {}

	getTestimonials(): Observable<APIResponse<Testimonial[]>> {
		return this.http.get<Testimonial[]>('assets/data/testimonials.json').pipe(
			map(data => ({ data })),
			catchError(error => of({ data: [], error }))
		);
	}
}
