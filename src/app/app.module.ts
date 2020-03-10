import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { NavbarModule, ButtonModule } from '@ag-modules';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidenavModule } from './modules/sidenav/sidenav.module';
import { IconModule } from './modules/icon/icon.module';
import { SidenavItemComponent } from './components/sidenav-item/sidenav-item.component';

@NgModule({
	declarations: [AppComponent, SidenavItemComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
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
