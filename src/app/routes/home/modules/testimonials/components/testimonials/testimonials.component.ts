import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Testimonial } from '@ag-models';

@Component({
	selector: 'ag-testimonials',
	templateUrl: './testimonials.component.html',
	styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
	@Input() testimonials!: Observable<Testimonial[]>;
	error: any;

	constructor() {}

	ngOnInit(): void {
		this.testimonials.subscribe(
			data => {
				console.log(data);
			},
			err => {
				this.error = err;
			}
		);
	}
}
