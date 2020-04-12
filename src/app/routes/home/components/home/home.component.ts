import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Component({
	selector: 'ag-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
	private componentDestroyed: Subject<void>;

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
