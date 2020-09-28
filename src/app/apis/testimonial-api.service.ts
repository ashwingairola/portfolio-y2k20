import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Testimonial } from '@ag-models';
import { Observable } from 'rxjs';

@Injectable()
export class TestimonialApiService {
	constructor(private http: HttpClient) {}

	getTestimonials(): Observable<Testimonial[]> {
		return this.http.get<Testimonial[]>('assets/data/testimonials.json');
	}
}
