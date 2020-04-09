import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	IconModule,
	ButtonModule,
	CardModule,
	SliderModule
} from '@ag-modules';
import { ProjectApiService } from '@ag-apis';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { MyWorkComponent } from './components/my-work/my-work.component';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
	declarations: [
		HomeComponent,
		BannerComponent,
		MyWorkComponent,
		ProjectCardComponent
	],
	imports: [
		CommonModule,
		HomeRoutingModule,
		IconModule,
		ButtonModule,
		SliderModule,
		CardModule
	],
	providers: [ProjectApiService]
})
export class HomeModule {}
