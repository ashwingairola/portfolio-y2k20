import { Component, Input, OnInit } from '@angular/core';

import { APIResponse, Skill } from '@ag-models';
import { Observable } from 'rxjs';

@Component({
	selector: 'ag-skill-grid',
	templateUrl: './skill-grid.component.html',
	styleUrls: ['./skill-grid.component.scss']
})
export class SkillGridComponent implements OnInit {
	@Input() categoryName!: string;
	@Input() skills$?: Observable<APIResponse<Skill[]>>;

	constructor() {}

	ngOnInit(): void {}
}
