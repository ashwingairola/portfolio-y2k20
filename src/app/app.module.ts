import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SidenavModule, ButtonModule, IconModule } from '@ag-modules';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidenavItemComponent } from './components/sidenav-item/sidenav-item.component';

@NgModule({
	declarations: [AppComponent, SidenavItemComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		SidenavModule,
		SidenavModule,
		IconModule,
		ButtonModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
