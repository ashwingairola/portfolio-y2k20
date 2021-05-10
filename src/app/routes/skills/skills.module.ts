import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule, RepeatModule } from '@ag-modules';
import { SkillsCommonsModule } from '@ag-modules/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillGridComponent } from './components/skill-grid/skill-grid.component';

@NgModule({
	declarations: [SkillsComponent, SkillGridComponent],
	imports: [
		CommonModule,
		SkillsRoutingModule,
		SkillsCommonsModule,
		CardModule,
		RepeatModule
	]
})
export class SkillsModule {}
