import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@NgModule({
	declarations: [SidenavComponent, MenuItemComponent],
	imports: [CommonModule],
	exports: [SidenavComponent, MenuItemComponent]
})
export class SidenavModule {}
