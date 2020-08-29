import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment as env } from '@ag-env';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'ag-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, OnDestroy {
	resumeUrl: string;
	resumeFilename: string;
	showLargeBanner: boolean;
	unsubscribeSubject: Subject<void>;

	constructor(private breakpointObserver: BreakpointObserver) {
		this.resumeUrl = env.resume.url;
		this.resumeFilename = env.resume.filename;
		this.showLargeBanner = false;
		this.unsubscribeSubject = new Subject();
	}

	ngOnInit() {
		this.breakpointObserver
			.observe(['(min-width: 640px)'])
			.pipe(takeUntil(this.unsubscribeSubject))
			.subscribe(breakpointState => {
				if (breakpointState.matches) {
					this.showLargeBanner = true;
				} else {
					this.showLargeBanner = false;
				}
			});
	}

	ngOnDestroy() {
		this.unsubscribeSubject.next();
	}
}
