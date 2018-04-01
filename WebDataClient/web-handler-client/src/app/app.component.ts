import { Component } from '@angular/core';
import { Property } from './model/property';
import { ApiServiceService } from './api-service.service'
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Coding Exercise!!';
  public property1 : Property;
  public property2 : Property;
  public property3: Property;
  public properties: Property[] = [];

  constructor(private apiService: ApiServiceService) { 
    apiService.getPropertyDetails("https://www.airbnb.co.uk/rooms/14531512?s=51").
    subscribe( data => 
      { 
        this.property1 = data;
        console.log(this.property1.PropertyType); 
        this.properties.push(this.property1);
      }
    );
  
    apiService.getPropertyDetails("https://www.airbnb.co.uk/rooms/19278160?s=51").
    subscribe( data => 
      { 
        this.property2 = data;
        console.log(this.property2.PropertyType); 
        this.properties.push(this.property2);
      }
    );

    apiService.getPropertyDetails("https://www.airbnb.co.uk/rooms/19292873?s=51").
    subscribe( data => 
      { 
        this.property3 = data;
        console.log(this.property3.PropertyType); 
        this.properties.push(this.property3);
      }
    );
  }
}
