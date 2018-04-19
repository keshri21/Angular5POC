import {Component} from '@angular/core';

@Component({
	selector: '.warning-alert',
	template: `
		<div>
			Warning Mesaage!
		</div>
	`,
	styleUrls: ['./warning.component.css']
})
export class WarningAlert{
	message = 'Warning message !';
}