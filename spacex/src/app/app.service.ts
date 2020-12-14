import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LaunchData } from './classes';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl: string = 'https://api.spacexdata.com/v3';
  private contentLoaded: boolean = false;
  private launchData: LaunchData[];
  limit: number;
  year: number;
  launch: string;
  land: string;
  constructor(private http: HttpClient, private router: Router) {}

  setYear(year: number): void {
    this.year = year === this.year ? undefined : year;
    this.loadData();
  }

  setSLaunch(launch: string): void {
    this.launch = this.launch === launch ? undefined : launch;
    this.loadData();
  }
  setSLand(land: string): void {
    this.land = this.land === land ? undefined : land;
    this.loadData();
  }

  setLimit(limit: number): void {
    this.limit = limit;
  }

  getLaunches(): Observable<LaunchData[]> {
    let params = {
      limit: this.limit ? this.limit : 100
    };
    if (this.launch) {
      params['launch_success'] = this.launch === 'True' ? true : false;
    }
    if (this.land) {
      params['land_success'] = this.land === 'True' ? true : false;
    }

    if (this.year) {
      params['launch_year'] = this.year;
    }
    return this.get<LaunchData[]>('/launches', { params });
  }

  getContentLoaded(): boolean {
    return this.contentLoaded;
  }

  getLaunchData(): LaunchData[] {
    try {
      return JSON.parse(JSON.stringify(this.launchData));
    } catch (error) {
      return [];
    }
  }

  goProducts() {
    let params = {
      limit: this.limit ? this.limit : 100
    };
    if (this.launch) {
      params['launch_success'] = this.launch === 'True' ? true : false;
    }
    if (this.land) {
      params['land_success'] = this.land === 'True' ? true : false;
    }

    if (this.year) {
      params['launch_year'] = this.year;
    }
    this.router.navigate(['/home'], { queryParams: params });
  }

  loadData() {
    this.goProducts();
    this.contentLoaded = false;
    this.getLaunches().subscribe((data: LaunchData[]) => {
      this.launchData = data;
      this.contentLoaded = true;
    });
  }

  get<T>(url: string, options = {}): Observable<T> {
    const api: string = this.apiUrl + url;
    return this.http.get<T>(api, options);
  }
}
