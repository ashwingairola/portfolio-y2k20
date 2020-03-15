import { Component } from '@angular/core';
import { environment as env } from '@ag-env';

@Component({
	selector: 'ag-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
	resumeUrl: string;
	resumeFilename: string;

	constructor() {
		this.resumeUrl = env.resume.url;
		this.resumeFilename = env.resume.filename;
	}
}
