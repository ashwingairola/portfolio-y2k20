import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavItemComponent } from './components/sidenav-item/sidenav-item.component';

@NgModule({
	declarations: [SidenavComponent, SidenavItemComponent],
	imports: [CommonModule],
	exports: [SidenavComponent, SidenavItemComponent]
})
export class SidenavModule {}
