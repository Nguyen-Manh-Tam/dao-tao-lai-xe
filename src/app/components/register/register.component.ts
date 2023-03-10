import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	registerForm = new FormGroup({
		name: new FormControl('', Validators.required),
		phone: new FormControl('', Validators.required),
	});

	constructor() {
	}

	ngOnInit(): void {
	}

	onSubmit(): void {
	}
}
