import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-theory-test',
	templateUrl: './theory-test.component.html',
	styleUrls: ['./theory-test.component.css']
})
export class TheoryTestComponent implements OnInit {
	filteredStreets: string[] = ['Khái Niệm', 'Quy Tắc Giao Thông', 'Nghiệp Vụ Vận Tải', 'Tốc Độ Khoảng Cách', 'Văn Hóa Giáo Dục', 'Kỹ Thuật Lái Xe', 'Cấu Tạo Sửa Chữa', 'Biển Báo'];
	isHide: boolean = false;
	isUse: boolean = false;
	isStart: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	clickQuestion() {
		this.isHide = true;
		this.isUse = false;
	}

	clickMockTest() {
		this.isUse = true;
		this.isHide = false;
	}

	changeOption(value: any) {
		if (value) {

		} else {
			this.isHide = true;
		}
	}

	clickStart() {

	}

}
