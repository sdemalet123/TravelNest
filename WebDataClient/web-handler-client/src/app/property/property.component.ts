import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Property } from '../model/property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})

export class PropertyComponent implements OnInit {
  propertyForm : FormGroup;
  @Input() property:Property;
 
  constructor(private formBuilder: FormBuilder) { 
  }

  ngOnInit() {
    this.propertyForm = this.formBuilder.group({
      Url: '',
      PropertyType: '',
      Beds: 0,
      Bathrooms: 0,
      Guests: 0
    })
  }
}
