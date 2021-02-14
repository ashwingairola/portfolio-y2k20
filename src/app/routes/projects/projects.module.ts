import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule, RepeatModule } from '@ag-modules';
import { ProjectApiService } from '@ag-apis';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectsCommonsModule } from 'src/app/modules/common/projects-commons/projects-commons.module';

@NgModule({
	declarations: [ProjectsComponent, ProjectDetailsComponent],
	imports: [
		CommonModule,
		ProjectsRoutingModule,
		CardModule,
		RepeatModule,
		ProjectsCommonsModule
	],
	exports: [ProjectsComponent],
	providers: [ProjectApiService]
})
export class ProjectsModule {}
