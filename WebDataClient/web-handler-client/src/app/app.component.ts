import { Component } from '@angular/core';
import { Property } from './Model/property';
import { ApiServiceService } from './api-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Coding Exercise!!';
  property1;
  property2;
  property3;
  public properties: Array<Property>;

  constructor(private apiService: ApiServiceService) { 
   apiService.getPropertyDetails("https://www.airbnb.co.uk/rooms/14531512?s=51").subscribe( data => 
    {
      this.property1 = data 
    }
  );
  apiService.getPropertyDetails("https://www.airbnb.co.uk/rooms/14531512?s=51").subscribe( data => 
  {
    this.property2 = data 
  }
  );
  apiService.getPropertyDetails("https://www.airbnb.co.uk/rooms/14531512?s=51").subscribe( data => 
    {
      this.property3 = data 
    }
  );
    let properties = [this.property1, this.property2, this.property3];
  }
}
