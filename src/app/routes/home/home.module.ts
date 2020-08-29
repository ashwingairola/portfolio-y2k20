import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';

import {
	IconModule,
	ButtonModule,
	CardModule,
	SliderModule,
	HyperlinkModule
} from '@ag-modules';
import { ProjectApiService, SkillApiService } from '@ag-apis';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { MyWorkComponent } from './components/my-work/my-work.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { BtnGithubComponent } from './components/btn-github/btn-github.component';
import { BtnProjectLinkComponent } from './components/btn-project-link/btn-project-link.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { SkillIconComponent } from './components/skill-icon/skill-icon.component';

@NgModule({
	declarations: [
		HomeComponent,
		BannerComponent,
		MyWorkComponent,
		ProjectCardComponent,
		BtnGithubComponent,
		BtnProjectLinkComponent,
		MySkillsComponent,
		SkillIconComponent
	],
	imports: [
		CommonModule,
		LayoutModule,
		HomeRoutingModule,
		IconModule,
		ButtonModule,
		SliderModule,
		CardModule,
		HyperlinkModule
	],
	providers: [ProjectApiService, SkillApiService]
})
export class HomeModule {}
