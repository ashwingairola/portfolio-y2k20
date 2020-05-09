import { Component, OnInit, Input } from '@angular/core';
import {
	trigger,
	state,
	style,
	animate,
	transition,
} from '@angular/animations';

import { Skill } from '@ag-models';

@Component({
	selector: 'ag-skill-icon',
	templateUrl: './skill-icon.component.html',
	styleUrls: ['./skill-icon.component.scss'],
	animations: [],
})
export class SkillIconComponent implements OnInit {
	@Input() skill!: Skill;

	constructor() {}

	ngOnInit(): void {}
}
