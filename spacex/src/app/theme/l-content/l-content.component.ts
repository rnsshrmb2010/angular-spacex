import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'slp-l-content',
  templateUrl: './l-content.component.html',
  styleUrls: ['./l-content.component.scss']
})
export class LContentComponent implements OnInit {
  public lYears: number[] = [];
  public sLaunch: string[] = ['True', 'False'];
  public sLanding: string[] = ['True', 'False'];
  constructor(public appService: AppService) {}

  ngOnInit(): void {
    this.lYears = [
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
      2013,
      2014,
      2015,
      2016,
      2017,
      2018,
      2019,
      2020
    ];
  }
}
