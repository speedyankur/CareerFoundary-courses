import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

	private courses = [];
	private errorMessage;
  	constructor(private _courseService: CourseService) { }

  	ngOnInit() {    
	    this._courseService.getCourses()
	      	.subscribe(data => {
		      	let coursesRawData = data;
	    		let onlyCourseSlugs = Object.keys(coursesRawData.courses);
	    		for (let prop of onlyCourseSlugs) { 
	    			let course = data.courses[prop];
	    			course.slug = prop;
	    	    	this.courses.push(course);
	    		}
	      	},error => this.errorMessage = error); 	
  	}
}
