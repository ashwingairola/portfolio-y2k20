import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
	SidenavModule,
	ButtonModule,
	IconModule,
	BottomnavModule,
	TooltipModule
} from '@ag-modules';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClickableComponent } from './components/clickable/clickable.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@NgModule({
	declarations: [AppComponent, MenuItemComponent, ClickableComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AppRoutingModule,
		SidenavModule,
		BottomnavModule,
		IconModule,
		ButtonModule,
		TooltipModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
