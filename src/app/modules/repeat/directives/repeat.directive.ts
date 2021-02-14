import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[agRepeat]'
})
export class RepeatDirective {
	constructor(
		private templateRef: TemplateRef<any>,
		private viewContainerRef: ViewContainerRef
	) {}

	@Input('agRepeat')
	set repetitions(times: number) {
		for (let i = 1; i <= times; ++i) {
			this.viewContainerRef.createEmbeddedView(this.templateRef);
		}
	}
}
