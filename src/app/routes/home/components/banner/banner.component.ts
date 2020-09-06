import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { environment as env } from '@ag-env';

const BREAKPOINTS = {
	tablet: '(min-width: 640px)',
	desktop: '(min-width: 1280px)'
};

@Component({
	selector: 'ag-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, OnDestroy {
	resumeUrl: string;
	resumeFilename: string;
	githubUrl: string;
	linkedInUrl: string;
	angelListUrl: string;
	showLargeHeroSection: boolean;
	showHeroImage: boolean;
	unsubscribeSubject: Subject<void>;

	constructor(private breakpointObserver: BreakpointObserver) {
		this.resumeUrl = env.resume.url;
		this.resumeFilename = env.resume.filename;
		this.githubUrl = env.githubUrl;
		this.linkedInUrl = env.linkedInUrl;
		this.angelListUrl = env.angelListUrl;
		this.showLargeHeroSection = false;
		this.showHeroImage = false;
		this.unsubscribeSubject = new Subject();
	}

	ngOnInit() {
		this.breakpointObserver
			.observe([BREAKPOINTS.tablet, BREAKPOINTS.desktop])
			.pipe(takeUntil(this.unsubscribeSubject))
			.subscribe(breakpointState => {
				console.log(breakpointState);
				const breakpoints = breakpointState.breakpoints;

				// Show or hide the large hero section.
				if (breakpoints[BREAKPOINTS.tablet]) {
					this.showLargeHeroSection = true;
				} else {
					this.showLargeHeroSection = false;
				}

				// Show or hide the hero image.
				if (breakpoints[BREAKPOINTS.desktop]) {
					this.showHeroImage = true;
				} else {
					this.showHeroImage = false;
				}
			});
	}

	ngOnDestroy() {
		this.unsubscribeSubject.next();
	}
}
