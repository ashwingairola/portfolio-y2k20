import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BtnGithubComponent } from './components/btn-github/btn-github.component';
import { BtnProjectLinkComponent } from './components/btn-project-link/btn-project-link.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { CardModule } from '../../card/card.module';
import { IconModule } from '../../icon/icon.module';
import { HyperlinkModule } from '../../hyperlink/hyperlink.module';

@NgModule({
	declarations: [
		BtnGithubComponent,
		BtnProjectLinkComponent,
		ProjectCardComponent
	],
	imports: [CommonModule, CardModule, IconModule, HyperlinkModule],
	exports: [ProjectCardComponent]
})
export class ProjectsCommonsModule {}
