import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {
	SidenavModule,
	ButtonModule,
	IconModule,
	BottomnavModule
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
		AppRoutingModule,
		SidenavModule,
		BottomnavModule,
		IconModule,
		ButtonModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
