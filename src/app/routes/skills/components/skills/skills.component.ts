import { SkillApiService } from '@ag-apis';
import { APIResponse, ESkillType, Skill } from '@ag-models';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'ag-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
	frontendSkills$?: Observable<APIResponse<Skill[]>>;

	constructor(private skillApiService: SkillApiService) {}

	ngOnInit(): void {
		this.frontendSkills$ = this.skillApiService.getSkillsByType(
			ESkillType.FRONTEND
		);
	}
}
