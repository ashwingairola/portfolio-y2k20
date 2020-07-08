import { NgModule } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, Scroll } from '@angular/router';
import { filter } from 'rxjs/operators';

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
		HttpClientModule,
		AppRoutingModule,
		SidenavModule,
		BottomnavModule,
		IconModule,
		ButtonModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
	// constructor(router: Router, viewportScroller: ViewportScroller) {
	// 	viewportScroller.setOffset([0, 50]);
	// 	router.events
	// 		.pipe(filter(e => e instanceof Scroll))
	// 		.subscribe((e: Scroll) => {
	// 			console.log(e);
	// 			if (e.anchor) {
	// 				// anchor navigation
	// 				/* setTimeout is the core line to solve the solution */
	// 				setTimeout(() => {
	// 					console.log('SCROLL');
	// 					viewportScroller.scrollToAnchor(e.anchor || '');
	// 				});
	// 			} else if (e.position) {
	// 				// backward navigation
	// 				viewportScroller.scrollToPosition(e.position);
	// 			} else {
	// 				// forward navigation
	// 				viewportScroller.scrollToPosition([0, 0]);
	// 			}
	// 		});
	// }
}
