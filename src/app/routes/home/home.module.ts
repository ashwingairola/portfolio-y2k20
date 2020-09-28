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
import {
	ProjectApiService,
	SkillApiService,
	TestimonialApiService
} from '@ag-apis';

import { HomeRoutingModule } from './home-routing.module';
import { TestimonialsModule } from './modules/testimonials/testimonials.module';

import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { MyWorkComponent } from './components/my-work/my-work.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { BtnGithubComponent } from './components/btn-github/btn-github.component';
import { BtnProjectLinkComponent } from './components/btn-project-link/btn-project-link.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { SkillIconComponent } from './components/skill-icon/skill-icon.component';
import { HeroPicComponent } from './components/hero-pic/hero-pic.component';

@NgModule({
	declarations: [
		HomeComponent,
		BannerComponent,
		MyWorkComponent,
		ProjectCardComponent,
		BtnGithubComponent,
		BtnProjectLinkComponent,
		MySkillsComponent,
		SkillIconComponent,
		HeroPicComponent
	],
	imports: [
		CommonModule,
		LayoutModule,
		HomeRoutingModule,
		TestimonialsModule,
		IconModule,
		ButtonModule,
		SliderModule,
		CardModule,
		HyperlinkModule,
		TooltipModule
	],
	providers: [ProjectApiService, SkillApiService, TestimonialApiService]
})
export class HomeModule {}
