import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICourse } from '../model/course';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

	private _coursesUrl = 'https://careerfoundry.com/en/api/courses';	
  constructor(private http: HttpClient) { }

  getCourses(): Observable<any>{
  	return this.http.get<any>(this._coursesUrl)
  					.pipe(catchError(this.errorHandler));
  }
  getCourse(slug): Observable<ICourse>{
  	return this.http.get<ICourse>(this._coursesUrl+'/'+slug)
  					.pipe(catchError(this.errorHandler));
  }  
  errorHandler(error: HttpErrorResponse){
  	return throwError(error.message || "Server error");
  }
}
