import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { shareReplay, takeUntil } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { Testimonial } from '@ag-models';
import { TestimonialApiService } from '@ag-apis';

@Component({
	selector: 'ag-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
	private componentDestroyed: Subject<void>;
	testimonials$?: Observable<Testimonial[]>;

	constructor(
		private route: ActivatedRoute,
		@Inject(DOCUMENT) private document: Document,
		private testimonialsApi: TestimonialApiService
	) {
		this.componentDestroyed = new Subject();
	}

	ngOnInit(): void {
		this.route.fragment
			.pipe(takeUntil(this.componentDestroyed))
			.subscribe(fragment => {
				const element = this.document.querySelector('#' + fragment);
				element?.scrollIntoView();
			});

		this.testimonials$ = this.testimonialsApi
			.getTestimonials()
			.pipe(shareReplay(1));
	}

	ngOnDestroy(): void {
		this.componentDestroyed.next();
	}
}
