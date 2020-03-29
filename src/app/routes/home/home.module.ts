import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule, ButtonModule, CardModule } from '@ag-modules';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { MyWorkComponent } from './components/my-work/my-work.component';

@NgModule({
	declarations: [HomeComponent, BannerComponent, MyWorkComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		IconModule,
		ButtonModule,
		CardModule
	]
})
export class HomeModule {}
