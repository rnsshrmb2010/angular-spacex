import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { LaunchData } from 'src/app/classes';

@Component({
  selector: 'slp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  launchData: LaunchData[] = [];
  constructor(public appService: AppService) {}

  ngOnInit(): void {
    this.launchData = this.appService.getLaunchData();
  }
}
