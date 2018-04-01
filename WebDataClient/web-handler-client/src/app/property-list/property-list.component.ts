import { Component, Input, OnInit } from '@angular/core';
import { Property } from '../model/property';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  @Input() properties: Property[];

  constructor() { }

  ngOnInit() {
  }

}
