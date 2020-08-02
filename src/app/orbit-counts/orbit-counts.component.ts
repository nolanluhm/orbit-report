import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  types: string[] = [
    'Total Space Debris',
    'Total Communication',
    'Total Probe',
    'Total Positioning',
    'Total Space Station',
    'Total Telescope'
  ]

  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  getCount(prop): number {
    let count = 0;

    for (let satellite of this.satellites) {
      if (satellite.type === prop) {
        count++
      }
    }
    return count;
  }

}
