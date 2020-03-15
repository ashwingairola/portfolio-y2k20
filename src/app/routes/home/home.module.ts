import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { IconModule } from 'src/app/modules/icon/icon.module';


@NgModule({
  declarations: [HomeComponent, BannerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IconModule
  ]
})
export class HomeModule { }
