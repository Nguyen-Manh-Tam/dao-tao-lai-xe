import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-theory-test',
	templateUrl: './theory-test.component.html',
	styleUrls: ['./theory-test.component.css']
})
export class TheoryTestComponent implements OnInit {
	filteredStreets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];

	constructor() { }

	ngOnInit(): void {
	}

}
