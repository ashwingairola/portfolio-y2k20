import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavbarModule, ButtonModule } from '@ag-modules';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, NavbarModule, ButtonModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
