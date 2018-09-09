import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { LocationService } from '../service/location.service';
import { ILocation } from '../model/location';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LocationResolver implements Resolve<ILocation> {
  private _locationUrl = 'https://ipapi.co/json/';
  constructor(private http: HttpClient, private locationService: LocationService) {}

  resolve(): Observable<any> {
    return this.http.get<ILocation>(this._locationUrl).pipe(
      catchError( (err) => throwError(err.json().error) )
    )
  }
}