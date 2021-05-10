import { Component, OnInit, Input } from '@angular/core';
import {
	trigger,
	state,
	style,
	animate,
	transition
} from '@angular/animations';

import { Skill } from '@ag-models';

@Component({
	selector: 'ag-skill-icon',
	templateUrl: './skill-icon.component.html',
	styleUrls: ['./skill-icon.component.scss'],
	animations: [
		trigger('hovering', [
			state('true', style({ transform: 'translateY(0)', opacity: 1 })),
			state('false', style({ transform: 'translateY(10px)', opacity: 0 })),
			transition('false <=> true', animate('0.2s'))
		])
	]
})
export class SkillIconComponent implements OnInit {
	@Input() skill!: Skill;
	hovering = false;

	constructor() {}

	ngOnInit(): void {}
}
