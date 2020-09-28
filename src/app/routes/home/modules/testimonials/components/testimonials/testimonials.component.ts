import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { APIResponse, Testimonial } from '@ag-models';
import { TestimonialApiService } from '@ag-apis';

@Component({
	selector: 'ag-testimonials',
	templateUrl: './testimonials.component.html',
	styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
	testimonialsData$: Observable<APIResponse<Testimonial[]>>;

	constructor(private testimonialApi: TestimonialApiService) {
		this.testimonialsData$ = this.testimonialApi.getTestimonials();
	}
}
