import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavbarModule, ButtonModule } from '@ag-modules';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidenavModule } from './modules/sidenav/sidenav.module';
import { IconModule } from './modules/icon/icon.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NavbarModule,
		SidenavModule,
		IconModule,
		ButtonModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
