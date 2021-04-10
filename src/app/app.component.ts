import { Component, OnInit } from '@angular/core';
import {
	RouteConfigLoadEnd,
	RouteConfigLoadStart,
	Router
} from '@angular/router';

import { environment as env } from '@ag-env';

@Component({
	selector: 'ag-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	showLoader = false;
	resumeUrl = env.resume.url;
	resumeFilename = env.resume.filename;

	constructor(private router: Router) {}

	ngOnInit(): void {
		this.router.events.subscribe({
			next: event => {
				if (event instanceof RouteConfigLoadStart) {
					this.showLoader = true;
				} else if (event instanceof RouteConfigLoadEnd) {
					this.showLoader = false;
				}
			}
		});
	}
}
