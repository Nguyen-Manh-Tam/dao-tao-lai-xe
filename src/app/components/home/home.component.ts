import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	onSubmit(form: NgForm) {
		if (form.valid) {
		  console.log(form.value);
		}
	  }

}
