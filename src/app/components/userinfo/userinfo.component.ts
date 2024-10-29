import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Userinfo {
  ip: string;
  hostname: string;
  org: string;
  city: string;
  region: string;
  country: string;
}

@Component({
  selector: 'app-userinfo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.css'
})
export class UserinfoComponent implements OnInit {
  browser: string | undefined;
  os: string | undefined;
  userinfo: Userinfo | undefined;

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.browser = this.getBrowser();
      this.os = this.getOS();
    }
  }

  ngOnInit() {
    this.getIpAddress();
  }

  getBrowser(): string {
    const userAgent = window.navigator.userAgent;
    let browserName = 'Unknown';

    if (userAgent.indexOf('Chrome') > -1) {
      browserName = 'Chromium';
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
    const userAgent = window.navigator.userAgent;
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
        // free api no point stealing it
        this.http.get<any>(`https://ipinfo.io/${response.ip}/json?token=2fe1bb5136bdc5`).subscribe({
          next: (response) => {
            this.userinfo = {
              ip: response.ip,
              hostname: response.hostname,
              org: response.org,
              city: response.city,
              region: response.region,
              country: response.country
            };
          },
          error: (error) => {
            console.error('Could not fetch location and ISP', error);
          }
        });
      },
      error: (error) => {
        console.error('Could not fetch IP address', error);
      }
    });
  }
}