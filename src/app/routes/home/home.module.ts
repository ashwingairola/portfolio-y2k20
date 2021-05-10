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
import { ProjectsCommonsModule, SkillsCommonsModule } from '@ag-modules/common';
import { ProjectApiService, SkillApiService } from '@ag-apis';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { MyWorkComponent } from './components/my-work/my-work.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { HeroPicComponent } from './components/hero-pic/hero-pic.component';

@NgModule({
	declarations: [
		HomeComponent,
		BannerComponent,
		MyWorkComponent,
		MySkillsComponent,
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
		ProjectsCommonsModule,
		SkillsCommonsModule
	],
	providers: [ProjectApiService, SkillApiService]
})
export class HomeModule {}
