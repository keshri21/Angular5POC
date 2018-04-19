import {Component} from '@angular/core';

@Component({
	selector: '.success-alert',
	template: `
		<div>
			{{ message }}
		</div>
	`,
	styles: [`
		div{
			color: black;
			background-color: lightgreen;
			padding: 10px;
			border: 1px solid green;
		}
	`]
})
export class SuccessAlert{
	message = 'Success message !';
}