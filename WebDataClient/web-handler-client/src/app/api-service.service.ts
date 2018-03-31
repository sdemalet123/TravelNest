import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Property } from './model/property';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiServiceService {

  constructor(private http : Http) { }

  public getPropertyDetails( url : string) : Observable<Property[]>
  {
     return this.http.get(url).map(response => 
      { 
        return response.json().map(item => 
          {
            return new Property( item.Url, item.PropertyType, item.Beds, item.Bathrooms, item.Guests);
          }
        );
      }).catch(this.handleError);
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}
