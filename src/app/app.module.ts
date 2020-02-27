import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavbarModule } from '@ag-modules';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, NavbarModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
