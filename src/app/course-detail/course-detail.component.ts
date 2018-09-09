import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service//course.service';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

	private courseSlug ;
	private courseDetail;
	private errorMessage;
	private location;
	constructor(private _locationService: LocationService, private _courseService: CourseService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.location = this.route.snapshot.data['location'];
		let slug = this.route.snapshot.paramMap.get('slug');
		this.courseSlug=slug;
		this._courseService.getCourse(slug)
			.subscribe(data => {
				this.courseDetail = data;
			},error => this.errorMessage = error);             
	}

}
