import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';


@NgModule({
  declarations: [ProjectsComponent, ProjectDetailsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
