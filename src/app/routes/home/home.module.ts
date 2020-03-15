import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '@ag-modules';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
	declarations: [HomeComponent, BannerComponent],
	imports: [CommonModule, HomeRoutingModule, IconModule]
})
export class HomeModule {}
