import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Property } from './model/property';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiServiceService {

  constructor(private http : HttpClient) { }

  public getPropertyDetails( url : string) : Observable<Property>
  {
    let fullurl = API_URL + "?url=" + url;
    return this.http.get<Property>(fullurl, {responseType: 'json'})
    .catch(this.handleError);
}

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}
