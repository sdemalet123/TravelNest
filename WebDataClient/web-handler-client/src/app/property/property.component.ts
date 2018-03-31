import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Property } from '../Model/property';

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
      upropertyurl: '',
      propertytype: '',
      nobeds: 0,
      nobathrooms: 0,
      noguests: 0
    })
  }
}
