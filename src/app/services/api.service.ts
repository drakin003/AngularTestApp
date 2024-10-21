import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  usersUrl = 'http://51.112.70.161:4300/api/users';
  productsUrl = 'http://51.112.70.161:4300/api/products';
  registerUrl = 'http://51.112.70.161:4300/api/register';

  weatherkey = '5fee79025f68465dbf4114454232705';

  constructor(private http: HttpClient) { }

  getusers() {
    return this.http.get(this.usersUrl);
  }

  getproducts() {
    return this.http.get(this.productsUrl);
  }

  getweatherinfo(city: string) {
    let weatherlink = `http://api.weatherapi.com/v1/current.json?key=${this.weatherkey}&q=${city}&aqi=no`;
    return this.http.get(weatherlink);
  }

  getregister(userinfo: any): Observable<any> {
    return this.http.post<any>(this.registerUrl, userinfo);
  }
}
