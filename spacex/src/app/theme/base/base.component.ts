import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'slp-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  constructor(public appService: AppService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const params = this.route.snapshot.queryParams;
    if (params.launch_year) {
      this.appService.year = Number(params.launch_year);
    }
    if (params.limit) {
      this.appService.limit = Number(params.limit);
    }
    if (params.launch_success) {
      const l =
        params.launch_success === 'true' || params.launch_success === true
          ? 'True'
          : 'False';
      this.appService.launch = l;
    }
    if (params.land_success) {
      const l =
        params.land_success === 'true' || params.land_success === true
          ? 'True'
          : 'False';
      this.appService.land = l;
    }
    this.appService.loadData();
  }
}
