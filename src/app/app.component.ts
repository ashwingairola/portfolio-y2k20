import { Component, OnInit } from '@angular/core';
import {
	RouteConfigLoadEnd,
	RouteConfigLoadStart,
	Router
} from '@angular/router';

@Component({
	selector: 'ag-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	showLoader = false;

	constructor(private router: Router) {}

	ngOnInit(): void {
		this.router.events.subscribe(event => {
			if (event instanceof RouteConfigLoadStart) {
				this.showLoader = true;
			} else if (event instanceof RouteConfigLoadEnd) {
				this.showLoader = false;
			}
		});
	}
}
