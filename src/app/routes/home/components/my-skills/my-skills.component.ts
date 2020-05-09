import { Component, OnInit } from '@angular/core';
import { SkillApiService } from '@ag-apis';
import { Skill } from '@ag-models';

@Component({
	selector: 'ag-my-skills',
	templateUrl: './my-skills.component.html',
	styleUrls: ['./my-skills.component.scss'],
})
export class MySkillsComponent implements OnInit {
	skills?: Skill[];

	constructor(private skillApi: SkillApiService) {}

	ngOnInit(): void {
		this.skillApi.getProjects().subscribe(skills => {
			this.skills = skills;
		});
	}
}
