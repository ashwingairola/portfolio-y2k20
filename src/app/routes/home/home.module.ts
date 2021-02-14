import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';

import {
	IconModule,
	ButtonModule,
	CardModule,
	SliderModule,
	HyperlinkModule,
	TooltipModule
} from '@ag-modules';
import { ProjectApiService, SkillApiService } from '@ag-apis';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { MyWorkComponent } from './components/my-work/my-work.component';
// import { ProjectCardComponent } from './project-card/project-card.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { SkillIconComponent } from './components/skill-icon/skill-icon.component';
import { HeroPicComponent } from './components/hero-pic/hero-pic.component';
import { ProjectsCommonsModule } from 'src/app/modules/common/projects-commons/projects-commons.module';

@NgModule({
	declarations: [
		HomeComponent,
		BannerComponent,
		MyWorkComponent,
		// ProjectCardComponent,
		MySkillsComponent,
		SkillIconComponent,
		HeroPicComponent
	],
	imports: [
		CommonModule,
		LayoutModule,
		HomeRoutingModule,
		IconModule,
		ButtonModule,
		SliderModule,
		CardModule,
		HyperlinkModule,
		TooltipModule,
		ProjectsCommonsModule
	],
	providers: [ProjectApiService, SkillApiService]
})
export class HomeModule {}
