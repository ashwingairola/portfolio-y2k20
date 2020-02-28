import { Component } from '@angular/core';
import { environment as env } from '@ag-env';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	resumeUrl: string;
	resumeFilename: string;

	constructor() {
		this.resumeUrl = env.resume.url;
		this.resumeFilename = env.resume.filename;
	}
}
