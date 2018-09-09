import { Injectable } from '@angular/core';
import { ILocation } from './location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
	private _location:ILocation;
	constructor() { }
	setLocation(location){
		this._location = location;
	}
	getLocation(){
		return this._location;
	}
}
