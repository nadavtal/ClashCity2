import { Component, OnInit } from '@angular/core';
import { UNITS } from '../shared/units';
import { Unit } from '../shared/unit';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  units: Unit[];
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.units = this.data.getUnits();
    
  }
  
}
