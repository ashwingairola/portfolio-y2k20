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
	programmingLanguages$?: Observable<APIResponse<Skill[]>>;
	frontendSkills$?: Observable<APIResponse<Skill[]>>;
	backendSkills$?: Observable<APIResponse<Skill[]>>;
	dbSkills$?: Observable<APIResponse<Skill[]>>;
	testingSkills$?: Observable<APIResponse<Skill[]>>;

	constructor(private skillApiService: SkillApiService) {}

	ngOnInit(): void {
		this.programmingLanguages$ = this.skillApiService.getSkillsByType(
			ESkillType.LANGUAGES
		);

		this.frontendSkills$ = this.skillApiService.getSkillsByType(
			ESkillType.FRONTEND
		);

		this.backendSkills$ = this.skillApiService.getSkillsByType(
			ESkillType.BACKEND
		);

		this.dbSkills$ = this.skillApiService.getSkillsByType(ESkillType.DATABASE);

		this.testingSkills$ = this.skillApiService.getSkillsByType(
			ESkillType.TESTING
		);
	}
}
