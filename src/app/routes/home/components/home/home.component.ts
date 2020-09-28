import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Testimonial } from '@ag-models';

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
		@Inject(DOCUMENT) private document: Document
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
	}

	ngOnDestroy(): void {
		this.componentDestroyed.next();
	}
}
