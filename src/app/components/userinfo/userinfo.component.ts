import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinfo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.css'
})
export class UserinfoComponent implements OnInit {
  browser: string;
  os: string;
  ip: string | any;
  hostname: string | undefined;
  isp: string | undefined;
  city: string | undefined;
  region: string | undefined;
  country: string | undefined;

  constructor(private http: HttpClient) {
    this.browser = this.getBrowser();
    this.os = this.getOS();
  }

  ngOnInit() {
    this.getIpAddress();
  }

  getBrowser(): string {
    const userAgent = navigator.userAgent;
    let browserName = 'Unknown';

    if (userAgent.indexOf('Chrome') > -1) {
      browserName = 'Chrome';
    } else if (userAgent.indexOf('Firefox') > -1) {
      browserName = 'Firefox';
    } else if (userAgent.indexOf('Safari') > -1) {
      browserName = 'Safari';
    } else if (userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Trident') > -1) {
      browserName = 'Internet Explorer';
    }

    return browserName;
  }

  getOS(): string {
    const userAgent = navigator.userAgent;
    let osName = 'Unknown OS';

    if (userAgent.indexOf('Win') > -1) {
      osName = 'Windows';
    } else if (userAgent.indexOf('Mac') > -1) {
      osName = 'MacOS';
    } else if (userAgent.indexOf('X11') > -1 || userAgent.indexOf('Linux') > -1) {
      osName = 'Linux';
    } else if (userAgent.indexOf('Android') > -1) {
      osName = 'Android';
    } else if (userAgent.indexOf('like Mac') > -1) {
      osName = 'iOS';
    }

    return osName;
  }

  getIpAddress() {
    this.http.get<any>('https://api.ipify.org?format=json').subscribe({
      next: (response) => {
        this.ip = response.ip;
        this.getLocationAndIsp(this.ip);
      },
      error: (error) => {
        console.error('Could not fetch IP address', error);
      }
    });
  }

  getLocationAndIsp(ip: string) {
    const apiKey = '2fe1bb5136bdc5';
    this.http.get<any>(`https://ipinfo.io/${ip}/json?token=${apiKey}`).subscribe({
      next: (response) => {
        this.hostname = response.hostname;
        this.isp = response.org;
        this.city = response.city;
        this.region = response.region;
        this.country = response.country;
      },
      error: (error) => {
        console.error('Could not fetch location and ISP', error);
      }
    });
  }
}