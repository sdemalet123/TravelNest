import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PropertyListComponent } from './property-list/property-list.component';
import { ApiServiceService} from './api-service.service'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    PropertyListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
