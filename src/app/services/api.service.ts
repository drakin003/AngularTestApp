import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiLink = 'http://51.112.70.161:4300/api/users';

  constructor(private http: HttpClient) { 
  }

  getdata(){
    return this.http.get(this.apiLink);
  }
}
