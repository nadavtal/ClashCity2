import { Component, OnInit } from '@angular/core';
import { GrUNITS } from '../shared/units';
import { AiUNITS } from '../shared/units';
import { TowUNITS } from '../shared/units';
import { SpeUNITS } from '../shared/units';
import { Unit } from '../shared/unit';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  grUnits: Unit[];
  aiUnits: Unit[];
  towUNITS: Unit[];
  speUNITS: Unit[];
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.grUnits = this.data.getGrUnits();
    this.aiUnits = this.data.getAiUnits();
    this.towUNITS = this.data.getTowUnits();
    this.speUNITS = this.data.getSpeUnits();
    
    console.log(this.grUnits);
    console.log(this.aiUnits);
    console.log(this.towUNITS);
    console.log(this.speUNITS);
  }
  
}
