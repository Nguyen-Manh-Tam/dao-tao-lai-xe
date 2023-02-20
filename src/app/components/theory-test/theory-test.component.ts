import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-theory-test',
	templateUrl: './theory-test.component.html',
	styleUrls: ['./theory-test.component.css']
})
export class TheoryTestComponent implements OnInit {
	filteredStreets: string[] = ['Khái Niệm', 'Quy Tắc Giao Thông', 'Nghiệp Vụ Vận Tải', 'Tốc Độ Khoảng Cách', 'Văn Hóa Giáo Dục', 'Kỹ Thuật Lái Xe', 'Cấu Tạo Sửa Chữa', 'Biển Báo'];
	isHide: boolean = false;
	// street: string = 'Khái Niệm';

	constructor() { }

	ngOnInit(): void {
	}

	clickQuestion() {
		this.isHide = true;
	}

}
