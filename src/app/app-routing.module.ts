import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('./routes/home/home.module').then(u => u.HomeModule)
	},
	{
		path: 'projects',
		loadChildren: () =>
			import('./routes/projects/projects.module').then(u => u.ProjectsModule)
	},
	{
		path: 'skills',
		loadChildren: () =>
			import('./routes/skills/skills.module').then(u => u.SkillsModule)
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			anchorScrolling: 'enabled',
			scrollPositionRestoration: 'enabled',
			relativeLinkResolution: 'legacy'
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
